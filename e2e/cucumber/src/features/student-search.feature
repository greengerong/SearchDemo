Feature:  Student Search

  As a user of Student System
  I want to seach student by his name
  So that I can view his detail

  Scenario Outline: Search student by name
    Given user open student search system
    When search a student with "<User Name>"
    Then get the detail of "<Search Result>"
    Examples:
      | User Name  | Search Result |
      | Liu        | Liu Ran       |
      | biao       | Tu biao       |
