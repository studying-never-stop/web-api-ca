import mongoose from "mongoose";

const Schema = mongoose.Schema;

// 定义用户收藏和想看列表的 Schema
const UserMovieListSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true, // 用户名为主键，必须唯一
  },
  favorites: {
    type: [Number], // 存放喜欢的电影 ID
    default: [],    // 默认是空数组
  },
  watchlist: {
    type: [Number], // 存放想看的电影 ID
    default: [],    // 默认是空数组
  },
});

// 添加静态方法以便查询和操作
UserMovieListSchema.statics = {
  // 查找用户的电影列表
  findByUsername(username) {
    return this.findOne({ username });
  },

  // 添加电影 ID 到 favorites
  async addToFavorites(username, movieId) {
    const user = await this.findByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }
    if (!user.favorites.includes(movieId)) {
      user.favorites.push(movieId);
      return user.save();
    }
    return user;
  },

  // 添加电影 ID 到 watchlist
  async addToWatchlist(username, movieId) {
    const user = await this.findByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }
    if (!user.watchlist.includes(movieId)) {
      user.watchlist.push(movieId);
      return user.save();
    }
    return user;
  },

  // 从 favorites 移除电影 ID
  async removeFromFavorites(username, movieId) {
    const user = await this.findByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }
    user.favorites = user.favorites.filter((id) => id !== movieId);
    return user.save();
  },

  // 从 watchlist 移除电影 ID
  async removeFromWatchlist(username, movieId) {
    const user = await this.findByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }
    user.watchlist = user.watchlist.filter((id) => id !== movieId);
    return user.save();
  },
};

// 导出模型
export default mongoose.model("UserMovieList", UserMovieListSchema);
