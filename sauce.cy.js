describe('Тестирование сайта russianfood.ru', () => {
  beforeEach(() => {
    cy.visit('https://www.russianfood.com/');
});
  it('Прохождение авторизации', () => {
    cy.get('span[id="user_login_form_btn"]').click();
    cy.get('div[class="sub_block sb_login"]')
  .first()
  .within(($form) => {cy.get('input[name="username"]').type('teortti');
  cy.get('input[name="password"]').type('5p31--()zj');
  cy.get('input[name="login"]').click();
    
})


  });
  it('Добавление рецепта в избранное', () => {
    cy.visit('https://www.russianfood.com/recipes/recipe.php?rid=162930');
    cy.get('span[id="user_login_form_btn"]').click();
    cy.get('div[class="sub_block sb_login"]')
  .first()
  .within(($form) => {cy.get('input[name="username"]').type('teortti');
  cy.get('input[name="password"]').type('5p31--()zj');
  cy.get('input[name="login"]').click();
    
})
    
  cy.get('a[href="/users/bookmark.php?add=1&c_id=162930&c_type_id=1"]').click();
  });
  it('Найти рецепт по фильтру', () => {
    cy.get('button').contains('Другие варианты поиска').click();
    cy.get('select[id="tag_tree[1][]"]').select('2');
    cy.get('select[id="tag_tree[2][]"]').select('202');
    cy.get('button').contains('Найти рецепты').click();

  });
  it('Подписаться на рассылку', () => {
    cy.get('input[id="email"]').type('teortti@yandex.ru');
    cy.get('input[value="Подписаться"]').click();

  });
  it('Оценить рецепт', () => {
    cy.visit('https://www.russianfood.com/recipes/recipe.php?rid=160633');
    cy.get('div[class="thanks_text"]').click();

  });

  it('Проверка работоспособности меню на моб. устройстве', () => {
    cy.viewport('iphone-x');
    cy.get('label[class="mobile-left mobmenu-toggle"]').should('be.visible')
    cy.get('label[class="mobile-left mobmenu-toggle"]').click()
    cy.wait(500);
    cy.get('ul[class="mobile-toggleable-menu mobile-left active"] > li > a[href="/recipes/"]').click()

  });
})

