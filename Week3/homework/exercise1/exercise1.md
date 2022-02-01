**Q1**: What columns violate 1NF?
**A1**: - 'food_description'&'food_code' attribute violates the rule "All data must be atomic". There are multiple values for a single column.

- 'dinner_date' is not written in a proper way. There are different formats of dates which violates rule "Attribute domain should not change."
- there are repeating values in more than one columns. (i.e id=1, dinner_id=D00001003, venue_code=B02 etc...)
  **SOLUTION**: We can create tables for 'dinner', 'venue' and 'food' separately with proper FKs to connect them.

**Q2**: What entities do you recognize that could be extracted?
**A2**: We can extract dinner_id, dinner_date, venue_code, venue_description, food_code, food_description from the table. Name the original table as 'Members' with the remaining columns 'member_id','member_name', 'member_address'

**Q3**: Name all the tables and columns that would make a 3NF compliant solution.
**A3:**

Member -> 'member_id','member_name', 'member_address'

Dinner -> 'dinner_id', 'dinner_date', 'venue'

Food -> 'food_code','food_description'

member-dinner -> 'occasion_id','member_id','dinner_id'

Venue -> 'venue_code','venue_description'

Order -> 'order_id', 'dinner', 'food'

PLEASE CHECK THE JPEG FILE IN THE FOLDER FOR VISUAL
