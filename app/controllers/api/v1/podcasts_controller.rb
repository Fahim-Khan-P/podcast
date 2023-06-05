class Api::V1::PodcastsController < ApplicationController

  def index
    podcasts = Podcast.includes(:user_podcast_views, :user_podcast_favorites).all
    return unless podcasts.present?

    render json: { status: 'success!', podcasts: podcasts.as_json(include: {
        user_podcast_views: [], user_podcast_favorites: []
    })}
  end

  def show
    podcast = Podcast.includes(:user_podcast_views, :user_podcast_favorites).all
    return unless podcast.present?

    render json: { status: 'success!', podcast: podcast.as_json(include: {
        user_podcast_views: [], user_podcast_favorites: []
    })}
  end

  def create
    podcast = Podcast.new(podcast_params)
    return unless podcast.save

    render json: {
        status: 'success!',
        podcast: podcast
    }
  end

  def update
    podcast = Podcast.find(params[:id])
    podcast.update(podcast_params) if podcast.present?
    return unless podcast.save

    render json: {
        status: 'success!',
        podcast: podcast
    }
  end

  def destroy
    podcast = Podcast.find(params[:id])
    podcast.destroy if podcast.present?
    return unless podcast.save

    render json: {
        status: 'success!',
        podcast: podcast
    }
  end

  private

  def podcast_params
    params.require(:podcast).permit(:producer, :item_id, :user_id)
  end
end
