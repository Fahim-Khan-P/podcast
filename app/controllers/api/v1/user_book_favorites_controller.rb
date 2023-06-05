class Api::V1::UserBookFavoritesController < ApplicationController
  def index
    user_books_fav = UserBookFavorite.all
    return unless user_books_fav.present?

    render json: { status: 'success!', user_books_fav: user_books_fav.as_json(include: {
        books: [], user_book_views: [], user_book_favorites: []

    }) }
  end

  def show
    user_book_fav = UserBookFavorite.find(params[:id])
    return unless user_book_fav.present?

    render json: { status: 'success!', user_book_fav: user_book_fav.as_json}
  end

  def create
    user_book_fav = UserBookFavorite.new(book_fav_params)
    return unless user_book_fav.save

    render json: {
        status: 'success!',
        user_book_fav: user_book_fav
    }
  end

  def update
    user_book_fav = UserBookFavorite.find(params[:id])
    user_book_fav.update(book_fav_params) if user_book_fav.present?
    return unless user_book_fav.save

    render json: {
        status: 'success!',
        user_book_fav: user_book_fav
    }
  end

  def destroy
    user_book_fav = UserBookFavorite.find(params[:id])
    user_book_fav.destroy if user_book_fav.present?
    return unless user_book_fav.save

    render json: {
        status: 'success!',
        user_book_fav: user_book_fav
    }
  end

  private

  def book_fav_params
    params.require(:user_book_favorites)
  end
end
