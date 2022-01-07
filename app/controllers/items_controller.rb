class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Item.all
  end

  def show
    item = Item.find(params[:id])
    if item.blank?
      render json: {
        errors: [
          'Invalid id'
        ]
      }, status: :unauthorized
      return
    end
    render json: item
  end

  def search
    item = Item.all
    item = item.filter_by_keyword(params[:keyword]) unless params[:keyword].blank?
    render json: item
  end
end
