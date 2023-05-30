class CreateUserBookViews < ActiveRecord::Migration[7.0]
  def change
    create_table :user_book_views do |t|
      t.references :user, null: false, foreign_key: true
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
