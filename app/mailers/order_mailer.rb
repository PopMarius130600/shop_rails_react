class OrderMailer < ApplicationMailer

  def order_email
    @email = params[:email]
    @order = params[:order]

    mail(to: @email, subject: "you got a new order")
  end
end
