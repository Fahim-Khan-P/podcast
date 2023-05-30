class CreateUserPodcastViews < ActiveRecord::Migration[7.0]
  def change
    create_table :user_podcast_views do |t|
      t.references :user, null: false, foreign_key: true
      t.references :podcast, null: false, foreign_key: true

      t.timestamps
    end
  end
end
