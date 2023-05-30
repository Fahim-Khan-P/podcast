class Podcast < ApplicationRecord

  has_one :item, dependent: :destroy
  belongs_to :user

  has_many :user_podcast_views, dependent: :destroy
  has_many :user_podcast_favorites, dependent: :destroy
end
