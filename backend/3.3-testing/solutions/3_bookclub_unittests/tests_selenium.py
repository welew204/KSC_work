from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium.webdriver.firefox.webdriver import WebDriver

class SeleniumTestCase(StaticLiveServerTestCase):
    fixtures = [
        'testing_data.json',
    ]

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.selenium = WebDriver()
        cls.selenium.implicitly_wait(10)

    @classmethod
    def tearDownClass(cls):
        cls.selenium.quit()
        super().tearDownClass()

    def test_login(self):
        url = self.live_server_url + '/account/login/'
        self.selenium.get(url)
        username_input = self.selenium.find_element_by_name("username")
        username_input.send_keys('janeqhacker')
        password_input = self.selenium.find_element_by_name("password")
        password_input.send_keys('password')
        self.selenium.find_element_by_xpath('//button[@type="submit"]').click()
        # Now, in the next page, try looking for the link to my profile
        # page, and ensure it links to the user account
        elem = self.selenium.find_element_by_partial_link_text('janeqhacker')
        href = elem.get_attribute('href')
        url = self.live_server_url + '/account/users/janeqhacker/'
        self.assertEqual(href, url)

