class Book < ApplicationRecord

  has_one :item, dependent: :destroy
  belongs_to :user

  has_many :user_book_favorites, dependent: :destroy
  has_many :user_book_views, dependent: :destroy
end
