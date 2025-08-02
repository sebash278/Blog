import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import fs from "fs";
import SQLiteStoreFactory from "connect-sqlite3";
import path from "path";

const sessionDir = path.resolve("sessions");
if (!fs.existsSync(sessionDir)) {
  fs.mkdirSync(sessionDir, { recursive: true });
}

const SQLiteStore = SQLiteStoreFactory(session);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    store: new SQLiteStore({
      db: "sessions.sqlite",
      dir: "./sessions",
    }),
    secret: "blogsini-bananini",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(express.json());

function loadData() {
  try {
    const postsData = fs.readFileSync("./data/posts.json", "utf8");
    const usersData = fs.readFileSync("./data/users.json", "utf8");

    const loadedPosts = JSON.parse(postsData);
    loadedPosts.forEach((post) => {
      if (!post.likes) {
        post.likes = 0;
      }
    });

    return {
      posts: loadedPosts,
      users: JSON.parse(usersData),
    };
  } catch (error) {
    console.log("Archivos no encontrados, usando datos por defecto");
    return {
      posts: [],
      users: [],
    };
  }
}

function saveData() {
  fs.writeFileSync("./data/posts.json", JSON.stringify(posts, null, 2));
  fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));
}

const data = loadData();

let posts = data.posts.length > 0 ? data.posts : [];
let users = data.users.length > 0 ? data.users : [];

let nextUserId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
let nextId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

function readPosts() {
  return posts;
}

function writePosts(updatedPosts) {
  posts = updatedPosts;
  saveData();
}

app.get("/login", (req, res) => {
  res.render("login.ejs", {
    user: req.session.user || null,
    pageStyles: "login",
  });
});

app.get("/register", (req, res) => {
  if (req.session.user) {
    res.redirect("/");
  } else {
    res.render("register.ejs", {
      user: req.session.user,
      pageStyles: "register",
    });
  }
});

app.get("/", (req, res) => {
  res.render("index.ejs", {
    posts: posts,
    user: req.session.user || null,
    pageStyles: "home",
  });
});

app.get("/profile", (req, res) => {
  if (req.session.user) {
    const userPosts = posts.filter(
      (post) => post.author === req.session.user.name
    );
    res.render("profile.ejs", {
      posts: userPosts,
      user: req.session.user,
      pageStyles: "profile",
    });
  } else {
    res.redirect("/login");
  }
});

app.get("/create", (req, res) => {
  if (req.session.user) {
    res.render("create.ejs", {
      user: req.session.user || null,
      pageStyles: "create",
    });
  } else {
    res.redirect("/login");
  }
});

app.get("/post/:id", (req, res) => {
  const postId = req.params.id;
  const post = posts.find((p) => p.id == postId);

  if (post) {
    res.render("post.ejs", {
      post: post,
      user: req.session.user || null,
      pageStyles: "post",
    });
  } else {
    res.status(404).redirect("/");
  }
});

app.get("/edit/:id", (req, res) => {
  if (req.session.user) {
    const postId = req.params.id;
    const post = posts.find((p) => p.id == postId);

    if (post) {
      res.render("edit.ejs", {
        post: post,
        user: req.session.user || null,
        pageStyles: "edit",
      });
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/login");
  }
});

app.post("/login", (req, res) => {
  const loginUser = req.body.username;
  const loginPass = req.body.password;
  const user = users.find(
    (u) => u.username === loginUser || u.email === loginUser
  );

  if (user && user.password === loginPass) {
    req.session.user = user;
    res.redirect("/");
  } else {

    let errorMessage = "";

    if (loginUser) {
      errorMessage = "La contraseña es incorrecta.";
    } else if (loginPass) {
      errorMessage = "El usuario no se encontró.";
    }

    res.render("login", { error: errorMessage, user: req.session.user || null});
  }
});

app.post("/register", (req, res) => {
  if (req.session.user) {
    return res.redirect("/");
  }

  const registerName = req.body.name;
  const registerUser = req.body.username;
  const registerEmail = req.body.email;
  const registerPass = req.body.password;

  const existingUser = users.find(
    (u) => u.username === registerUser || u.email === registerEmail
  );

  if (existingUser) {
    let errorMessage = "";

    if (existingUser.username === registerUser) {
      errorMessage = "El nombre de usuario ya está en uso.";
    } else if (existingUser.email === registerEmail) {
      errorMessage = "El correo ya está registrado.";
    }

    return res.render("register", { error: errorMessage, user: req.session.user || null});
  }

  const newUser = {
    id: nextUserId++,
    username: registerUser,
    email: registerEmail,
    password: registerPass,
    name: registerName,
  };

  users.push(newUser);
  req.session.user = newUser;
  saveData();
  res.redirect("/");
});


app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error al cerrar sesión: ", err);
    }
    res.redirect("/");
  });
});

app.post("/edit/:id", (req, res) => {
  if (req.session.user) {
    const postId = req.params.id;
    const post = posts.find((p) => p.id == postId);

    if (post) {
      post.title = req.body.title;
      post.content = req.body.content;
      saveData();
      res.redirect(`/post/${post.id}`);
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/login");
  }
});

app.post("/create", (req, res) => {
  if (req.session.user) {
    const newPost = {
      id: nextId++,
      title: req.body.title,
      content: req.body.content,
      author: req.session.user.username,
      date: new Date().toLocaleDateString(),
    };

    posts.unshift(newPost);
    saveData();
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

app.post("/delete/:id", (req, res) => {
  if (req.session.user) {
    const postId = req.params.id;
    const postIndex = posts.findIndex((p) => p.id == postId);
    if (postIndex !== -1) {
      posts.splice(postIndex, 1);
      saveData();
    }
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

app.post('/api/like/:postId', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Debes estar loggeado para dar like' });
  }

  try {
    const postId = parseInt(req.params.postId);
    const userId = req.session.user.id;
    const post = posts.find(p => p.id === postId);

    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }

    if (!post.likes) post.likes = 0;
    if (!post.likedBy) post.likedBy = [];

    const userIndex = post.likedBy.indexOf(userId);

    if (userIndex !== -1) {
      post.likes -= 1;
      post.likedBy.splice(userIndex, 1);
      saveData();

      return res.json({ success: true, likes: post.likes, userLiked: false });
    } else {
      post.likes += 1;
      post.likedBy.push(userId);
      saveData();

      return res.json({ success: true, likes: post.likes, userLiked: true });
    }

  } catch (error) {
    console.error('Error en toggleLike:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get("/api/debug/session", (req, res) => {
  res.json({
    hasSession: !!req.session.user,
    user: req.session.user ? req.session.user.username : null,
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});
