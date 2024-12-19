const originalAttachShadow = Element.prototype.attachShadow;
function customAttachShadow() {
  return originalAttachShadow.apply(this, [{ mode: 'open' }]);
};
Element.prototype.attachShadow = customAttachShadow;
