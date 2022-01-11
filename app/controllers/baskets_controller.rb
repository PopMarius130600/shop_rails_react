class BasketsController < ApplicationController


  def show
    @basket = @current_basket
    render json: @basket.item_lists
  end

  def destroy
    @basket = @current_basket
    @basket.destroy
  end

end
