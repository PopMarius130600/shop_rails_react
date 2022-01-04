class SubCategorysController < ApplicationController
  def index
    render json: SubCategory.all
  end
end
