# frozen_string_literal: true

module Api
  module V1
    class BooksController < ApplicationController
      def index
        books = Book.includes(:user_book_views, :user_book_favorites).all
        return unless books.present?

        render json: { status: 'success!', books: books.as_json(include: {
                                                                  books: [], user_book_views: [], user_book_favorites: []

                                                                }) }
      end

      def show
        book = Book.includes(:user_book_views, :user_book_favorites).find(params[:id])
        return unless book.present?

        render json: { status: 'success!', book: book.as_json(include: {user_book_views: [], user_book_favorites: []
        }) }
      end

      def create
        book = Book.new(book_params)
        return unless book.save

        render json: {
          status: 'success!',
          book: book
        }
      end

      def update
        book = Book.find(params[:id])
        book.update(book_params) if book.present?
        return unless book.save

        render json: {
          status: 'success!',
          book: book
        }
      end

      def destroy
        book = Book.find(params[:id])
        book.destroy if book.present?
        return unless book.save

        render json: {
          status: 'success!',
          book: book
        }
      end

      private

      def book_params
        params.require(:book).permit(:author, :name, :user_id, :item_id)
      end
    end
  end
end
