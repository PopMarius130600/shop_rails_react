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
    item = Item.all
    item = item.filter_by_keyword(params[:data][:keyword]) unless params[:data][:keyword].blank?
    item = item.filter_by_color(params[:data][:colors]) unless params[:data][:colors].blank?
    item = item.filter_by_size(params[:data][:sizes]) unless params[:data][:sizes].blank?
    item = item.filter_by_price(params[:data][:priceLow], params[:data][:priceHigh]) unless params[:data][:priceLow].blank? || params[:data][:priceHigh].blank?
    render json: item
  end
end
