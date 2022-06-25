class Api::AccountsController < ApplicationController
  before_action :set_account, only: [:show, :update, :destroy]

  def index
    binding.pry
    render json: current_user.accounts 
  end

  def show
    render json: @account
  end

  def create
    @account = current_user.accounts.new(account_params)
    if @account.save
      render json: @account
    else
      render json: { errors: @account.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @account.update(account_params)
      render json: @account
    else
      render json: { errors: @account.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @account.destroy
  end

  private

    def set_account
      @account = current_user.accounts.find(params[:id])
    end

    def account_params
      params.require(:account).permit(:title, :amt)
    end
end
