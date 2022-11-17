class PostStats {
  private _numOfLikes: number = 0;

  addLike(){
    ++this._numOfLikes;
  }

  removeLike(){
    --this._numOfLikes;
  }

  get numOfLikes(){
    return this._numOfLikes;
  }
}