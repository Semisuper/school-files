class Drink:
    # define the list of bases and flavors
    _valid_bases = {"water", "sbrite", "pokecola",
                    "Mr.Salt", "hill fog", "leaf wine"}
    _valid_flavors = {"lemon", "cherry",
                      "strawberry", "mint", "blueberry", "lime"}

    # variable initalizers
    def __init__(self):
        self._base = None
        self._flavors = set()

    # attaches the value of the base to the get_base method
    def get_base(self):
        return self._base

    # does the same here
    def get_flavors(self):
        return list(self._flavors)

    # does the same here
    def get_num_flavors(self):
        return len(self._flavors)

    # first checks if the inputted base value is a valid base, and sets the value of the base field to the value in the argument
    def set_base(self, base):
        if base in self.valid_bases:
            self._base = base
        else:
            raise ValueError(f"Pick a proper base from {self.valid_bases}.")

    # first checks if the value is valid, then adds it to a list
    def add_flavor(self, flavor):
        if flavor in self._valid_flavors:
            self.flavors.add(flavor)
        else:
            raise ValueError(f"Pick a proper flavor from {
                             self._valid_flavors}")

    # attaches the value of the list the the actual flavors field accessable outside the object
    def set_flavors(self, flavors):
        for flavor in flavors:
            if flavor not in self._valid_flavors:
                raise ValueError(f"Pick a proper flavor from {
                                 self._valid_flavors}")
        self._flavors = set(flavors)


class Order:
    # initializing lists
    def __init__(self):
        self._items = []

    # attaches the list to a globally accessable method
    def get_items(self):
        return self._items

    # creates a formatted list of all the Drink objects in the items list
    def get_total(self):
        receipt = "Your order receipt:\n"
        for i, drink in enumerate(self._items):
            base = drink.get_base()
            flavors = ", ".join(drink.get_flavors())
            receipt += f"{i + 1}: base - {base}, flavors - {flavors}\n"
        return receipt

    # Checks if the inputted argument is of the Drink class, then adds it to the items list
    def add_item(self, drink):
        if isinstance(drink, Drink):
            self._items.append(drink)
        else:
            raise ValueError("you can only add drinks to this order")

    # checks if the chosen index is inside the list, then removes it from the list
    def remove_item(self, index):
        if 0 <= index <= len(self._items):
            self._items.pop(index)
        else:
            raise IndexError("Invalid, cannot remove")
