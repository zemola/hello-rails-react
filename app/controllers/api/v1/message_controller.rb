# frozen_string_literal: true

module Api
  module V1
    # class MessageController.rb
    class MessagesController < ApplicationController
      def index
        msg = Message.all
        render json: msg[rand(0...msg.length - 1)]
      end
    end
  end
end
