class Podcast < ApplicationRecord

  has_one :item
  belongs_to :user

  has_many :user_podcast_views
  has_many :user_podcast_favorites
end
