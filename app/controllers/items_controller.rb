class ItemsController < ApplicationController

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

    render json: {
      item: ItemSerializer.new(item).attributes

    }.to_json
  end

  def search
   
    item = Item.all
    item = item.filter_by_keyword(params[:items][:keyword]) unless params[:items][:keyword].blank?
    item = item.filter_by_color(params[:items][:colors]) unless params[:items][:colors].blank?
    item = item.filter_by_size(params[:items][:sizes]) unless params[:items][:sizes].blank?
    item = item.filter_by_price(params[:items][:priceLow], params[:items][:priceHigh]) unless params[:items][:priceLow].blank? || params[:items][:priceHigh].blank?
    item = item.find(params[:items][:id]) unless params[:items][:id].blank?
    item = item.filter_by_subcategory(params[:items][:subCategoryId]) unless params[:items][:subCategoryId].blank?

    render json: item
  end

  def create
    item = Item.create(item_param)
    if item.save
      render json: item
    else
      render json: {
        errors: item.errors.messages
      }, status: :bad_request
    end
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy
  end

  def update
    item = Item.find(params[:id])
    if item.update(item_param)
      render json: item
    else
      render json: {
        errors: item.errors.messages
      },status: :bad_request
    end
  end

  private

  def item_param
    params.permit(:name, :description , :size, :color, :price, :stock, :gender, :image)
  end
end
