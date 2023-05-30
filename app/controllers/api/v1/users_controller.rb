# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.includes(:podcasts, :books, :user_podcast_favorites, :user_podcast_views,
                              :user_book_views, :user_book_favorites).all
        return unless users.present?

        render json: { status: 'success!', users: users.as_json(include: {
                                                                  podcasts: [], books: [], user_podcast_favorites: [],
                                                                  user_podcast_views: [], user_book_views: [], user_book_favorites: []

                                                                }) }
      end

      def show
        user = User.includes(:podcasts, :books, :user_podcast_favorites, :user_podcast_views,
                             :user_book_views, :user_book_favorites).find(params[:id])
        return unless user.present?

        render json: { status: 'success!', user: user.as_json(include: {
                                                                podcasts: [], books: [], user_podcast_favorites: [],
                                                                user_podcast_viewa: [], user_book_views: [], user_book_favorites: []

                                                              }) }
      end

      def create
        user = User.new(user_params)
        return unless user.save

        render json: {
          status: 'success!',
          user: user
        }
      end

      def update
        user = User.find(params[:id])
        user.update(user_params) if user.present?
        return unless user.save

        render json: {
          status: 'success!',
          user: user
        }
      end

      def destroy
        user = User.find(params[:id])
        user.destroy if user.present?
        return unless user.save

        render json: {
          status: 'success!',
          user: user
        }
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :password)
      end
    end
  end
end
