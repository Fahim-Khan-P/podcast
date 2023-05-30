class CreateUserPodcastFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :user_podcast_favorites do |t|
      t.references :user, null: false, foreign_key: true
      t.references :podcast, null: false, foreign_key: true

      t.timestamps
    end
  end
end
