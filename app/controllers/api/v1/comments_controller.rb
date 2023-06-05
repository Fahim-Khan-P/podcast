class Api::V1::CommentsController < ApplicationController
  def index
    comments = Comment.all
    return unless comments.present?

    render json: { status: 'success!', comments: comments}
  end

  def show
    comment = Comment.find(params[:id])
    return unless comment.present?

    render json: { status: 'success!', comment: comment}
  end

  def create
    comment = Comment.new(comment_params)
    return unless comment.save

    render json: {
        status: 'success!',
        comment: comment
    }
  end

  def update
    comment = Comment.find(params[:id])
    comment.update(comment_params) if comment.present?
    return unless comment.save

    render json: {
        status: 'success!',
        comment: comment
    }
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy if comment.present?
    return unless comment.save

    render json: {
        status: 'success!',
        comment: comment
    }
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :user_id)
  end
end
