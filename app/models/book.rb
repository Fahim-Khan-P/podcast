class Book < ApplicationRecord

  has_one :item
  belongs_to :user

  has_many :user_book_favorites
  has_many :user_book_views
end
