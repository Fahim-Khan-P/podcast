class User < ApplicationRecord
  has_many :comments
  has_many :likes
  has_many :books
  has_many :podcasts

  has_many :user_book_views
  has_many :user_book_favorites

  has_many :user_podcast_favorites
  has_many :user_podcast_views

end
