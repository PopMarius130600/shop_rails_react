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
    item = item.filter_by_keyword(params[:items][:keyword]) unless params[:items][:keyword].blank?
    item = item.filter_by_color(params[:items][:colors]) unless params[:items][:colors].blank?
    item = item.filter_by_size(params[:items][:sizes]) unless params[:items][:sizes].blank?
    item = item.filter_by_price(params[:items][:priceLow], params[:items][:priceHigh]) unless params[:items][:priceLow].blank? || params[:items][:priceHigh].blank?
    render json: item
  end
end
