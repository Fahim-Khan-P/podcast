class User < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :books, dependent: :destroy
  has_many :podcasts, dependent: :destroy

  has_many :user_book_views, dependent: :destroy
  has_many :user_book_favorites, dependent: :destroy

  has_many :user_podcast_favorites, dependent: :destroy
  has_many :user_podcast_views, dependent: :destroy

end
