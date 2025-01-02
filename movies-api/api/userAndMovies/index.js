import express from "express";
import UserMovieList from "../models/UserMovieListModel.js"; // 用户电影列表模型
import User from "../models/UserModel.js"; // 用户模型

const router = express.Router();

// **1. 验证用户并初始化电影列表 (Ensure User Exists in Movie List)**
router.post("/initialize", async (req, res) => {
  const { username } = req.body;

  try {
    // 确保用户在 User 表中存在
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 确保用户在 UserMovieList 表中存在
    let userMovieList = await UserMovieList.findOne({ username });
    if (!userMovieList) {
      userMovieList = new UserMovieList({ username });
      await userMovieList.save();
    }

    res.status(200).json({ message: "User initialized successfully", userMovieList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// **2. 添加电影到收藏 (Add to Favorites)**
router.post("/favorites/add", async (req, res) => {
  const { username, movieId } = req.body;

  try {
    const userMovieList = await UserMovieList.addToFavorites(username, movieId);
    res.status(200).json({ message: "Movie added to favorites", favorites: userMovieList.favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// **3. 从收藏移除电影 (Remove from Favorites)**
router.post("/favorites/remove", async (req, res) => {
  const { username, movieId } = req.body;

  try {
    const userMovieList = await UserMovieList.removeFromFavorites(username, movieId);
    res.status(200).json({ message: "Movie removed from favorites", favorites: userMovieList.favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// **4. 添加电影到想看列表 (Add to Watchlist)**
router.post("/watchlist/add", async (req, res) => {
  const { username, movieId } = req.body;

  try {
    const userMovieList = await UserMovieList.addToWatchlist(username, movieId);
    res.status(200).json({ message: "Movie added to watchlist", watchlist: userMovieList.watchlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// **5. 从想看列表移除电影 (Remove from Watchlist)**
router.post("/watchlist/remove", async (req, res) => {
  const { username, movieId } = req.body;

  try {
    const userMovieList = await UserMovieList.removeFromWatchlist(username, movieId);
    res.status(200).json({ message: "Movie removed from watchlist", watchlist: userMovieList.watchlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// **6. 查询用户数据 (Read User Data)**
router.post("/get", async (req, res) => {
  const { username } = req.body;

  try {
    const userMovieList = await UserMovieList.findOne({ username });
    if (!userMovieList) {
      return res.status(404).json({ message: "User movie list not found" });
    }
    res.status(200).json(userMovieList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
