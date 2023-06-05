Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :books
      resources :podcasts
      resources :items
      resources :likes
      resources :comments
      resources :user_book_favorites
      resources :user_book_views
      resources :user_podcast_favorites
      resources :user_podcast_views
    end
  end
end