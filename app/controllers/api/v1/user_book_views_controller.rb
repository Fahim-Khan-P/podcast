class Api::V1::UserBookViewsController < ApplicationController
  def index
    user_books_views = UserBookView.all
    return unless user_books_views.present?

    render json: { status: 'success!', user_books_views: user_books_views.as_json(include: {
        books: [], user_book_views: [], user_book_favorites: []

    }) }
  end

  def show
    user_book_view = UserBookView.find(params[:id])
    return unless user_book_view.present?

    render json: { status: 'success!', user_book_view: user_book_view.as_json}
  end

  def create
    user_book_view = UserBookView.new(book_view_params)
    return unless user_book_view.save

    render json: {
        status: 'success!',
        user_book_view: user_book_view
    }
  end

  def update
    user_book_view = UserBookView.find(params[:id])
    user_book_view.update(book_fav_params) if user_book_view.present?
    return unless user_book_view.save

    render json: {
        status: 'success!',
        user_book_view: user_book_view
    }
  end

  def destroy
    user_book_view = UserBookView.find(params[:id])
    user_book_view.destroy if user_book_view.present?
    return unless user_book_view.save

    render json: {
        status: 'success!',
        user_book_view: user_book_view
    }
  end

  private

  def book_view_params
    params.require(:user_book_views)
  end
end
