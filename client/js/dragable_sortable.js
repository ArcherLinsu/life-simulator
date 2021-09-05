"use strict";

var adjustment;
$(".simple_with_animation").sortable({
  group: 'simple_with_animation',
  pullPlaceholder: false,
  
});

var oldContainer;
$(".nested_with_switch").sortable({
  group: 'nested',
  afterMove: function (placeholder, container) {
    if(oldContainer != container){
      if(oldContainer)
        oldContainer.el.removeClass("active");
      container.el.addClass("active");

      oldContainer = container;
    }
  },
  onDrop: function ($item, container, _super) {
    container.el.removeClass("active");
    _super($item, container);
  }
});