$(() => {

  let total = 0;
  $(".confirm_order").click((event) => {

    event.preventDefault();

    let eventTarget = event.target;

    console.log(templateVars);




    // let formId = eventTarget.closest('form').id;

    // let size = $('input[name=sizes]:checked', '#'+formId).val();

    // let qty = $(eventTarget).prev().find('option:selected').text();
    // let price = 0;

    // if(size === 'small') {
    //   price += (10 * qty);
    // } else if (size === 'medium') {
    //   price += (20 * qty);
    // } else {
    //   price += (30 * qty);
    // }

    // $("#selectedItems").append(`<li> ${formId.charAt(0).toUpperCase()}${formId.slice(1)} Pizza - Size: ${size}, Qty: ${qty}, Price: $<span class="price">${price}</span>`);

    // total += price;

    // $('#cart').append(`<input type="hidden" name="id[]" value="${formId}">`);
    // $('#cart').append(`<input type="hidden" name="size[]" value="${size}">`);
    // $('#cart').append(`<input type="hidden" name="qty[]" value="${qty}">`);
    // $('#cart').append(`<input type="hidden" name="total[]" value="${total}">`);

    // $(".total_price").text(`The total is $${total}.`);

  });
});