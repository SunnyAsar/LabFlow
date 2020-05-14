# frozen_string_literal: true

class Api::BillsController < ApplicationController
  def index
    @bills = Bill.all
    render :index, status: :ok
  end

  def show
    @bill = Bill.includes(:samples, :patient).find(params[:id])
    render :show
  end
end
