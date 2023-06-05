# frozen_string_literal: true

module Api
  module V1
    class ItemsController < ApplicationController
      def index
        items = Item.all
        return unless items.present?

        render json: { status: 'success!', items: items.as_json}
      end

      def show
        item = Item.find(params[:id])
        return unless item.present?

        render json: { status: 'success!', item: item.as_json }
      end

      def create
        item = Item.new(item_params)
        return unless item.save

        render json: {
          status: 'success!',
          item: item
        }
      end

      def update
        item = Item.find(params[:id])
        item.update(item_params) if item.present?
        return unless item.save

        render json: {
          status: 'success!',
          item: item
        }
      end

      def destroy
        item = Item.find(params[:id])
        item.destroy if item.present?
        return unless item.save

        render json: {
          status: 'success!',
          item: item
        }
      end

      private

      def item_params
        params.require(:item).permit(:name, :description, :category)
      end
    end
  end
end
