class Api::V1::LikesController < ApplicationController

  def index
    likes = Like.all
    return unless likes.present?

    render json: { status: 'success!', likes: likes}
  end

  def show
    like = Lik.find(params[:id])
    return unless like.present?

    render json: { status: 'success!', like: like}
  end

  def create
    like = Like.new(like_params)
    return unless like.save

    render json: {
        status: 'success!',
        like: like
    }
  end

  def update
    like = Like.find(params[:id])
    like.update(like_params) if like.present?
    return unless like.save

    render json: {
        status: 'success!',
        like: like
    }
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy if like.present?
    return unless like.save

    render json: {
        status: 'success!',
        like: like
    }
  end

  private

  def like_params
    params.require(:like)
  end
end
