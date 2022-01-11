class OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def show
    @order = Order.find(params[:id])
  end

  def new
    @order = Order.new
  end

  def create
    @order = Order.new(order_params)
    @current_basket.item_lists.each do |item|
      @order.item_lists << item
      item.basket_id = nil
    end
    @order.save
    Basket.destroy(session[:basket_id])
    session[:basket_id] = nil

    render json: @order
  end

  private
  def order_params
    params.permit(:name, :email, :address)
  end
end
