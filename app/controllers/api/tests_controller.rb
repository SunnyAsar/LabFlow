# frozen_string_literal: true

class Api::TestsController < ApplicationController
  before_action :set_test, only: [:update]

  def index
    @tests = Test.all
    render json: @tests, status: :ok
  end

  def create
    @test = Test.new(test_params)
    @test.uid = current_user.id
    if @test.save
      render json: @test, status: :ok
    else
      render json: { error: @test.errors, message: 'somthing went wrong' }, status: :uprocessible_entity
    end
  end

  def update
    if
      @test.update_attribute(test_params)
      render json: @test, status: :ok
    else
      render json: { error: @test.errors }, status: :uprocessible_entity
    end
  end

  private

  def test_params
    params.require(:test).permit(:name, :description, :amount, :processing_time)
  end

  def set_test
    @test = Test.find(params[:id])
  end
end
