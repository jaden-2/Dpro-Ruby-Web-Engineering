require_relative "item_manager"
require_relative "ownable"
class Cart
  include ItemManager
  include Ownable
  def initialize(owner)
    self.owner = owner
    @items = []
  end

  def items
    # Cartにとってのitemsは自身の@itemsとしたいため、ItemManagerのitemsメソッドをオーバーライドします。
    # CartインスタンスがItemインスタンスを持つときは、オーナー権限の移譲をさせることなく、自身の@itemsに格納(Cart#add)するだけだからです。
    @items
  end

  def add(item)
    @items << item
  end

  def total_amount
    @items.sum(&:price)
  end

  def check_out(seller)
    return if owner.wallet.balance < total_amount

    seller.receive_payment(owner().pay(total_amount))
    @items.map {|item| item.owner = owner}
    @items = []

  end

end
