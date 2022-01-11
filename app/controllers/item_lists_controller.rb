class ItemListsController < ApplicationController

  def create
    # Find associated product and current cart
    item = Item.find(params[:item_id])
    current_basket = @current_basket

    # If cart already has this product then find the relevant line_item and iterate quantity otherwise create a new line_item for this product
    if current_basket.items.include?(item)
      # Find the line_item with the chosen_product
      @item_list = current_basket.item_list.find_by(:item_id => item)
      # Iterate the line_item's quantity by one
      @item_list.productCount += 1
    else
      @item_list = ItemList.new
      @item_list.basket = current_basket
      @item_list.item = item
      @item_list.productCount = params[:productCount]
    end

    # Save and redirect to cart show path
    @item_list.save
    render json: @item_list
  end

  def destroy
    @item_list = ItemList.find(params[:id])
    @item_list.destroy
  end

  def add_quantity
    @item_list = ItemList.find(params[:id])
    @item_list.productCount += 1
    @item_list.save
    render json: @item_list
  end

  def reduce_quantity
    @item_list = ItemList.find(params[:id])
    if @item_list.productCount > 1
      @item_list.productCount -= 1
    end
    @item_list.save
    render json: @item_list
  end


  private
  def item_list_params
    params.require(:item_list).permit(:productCount,:item_id, :basket_id)
  end

end
