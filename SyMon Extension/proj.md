PROJECT://SYMON
=================
Symon is a Service Desk helper built to perform support functions.

Current state
-----------------
Symon is currently operational as a email template generator *(pulls info from webpage, creates string)*
- completes this function without bugs
- gives a badge indicator of click on button

End Goal (consumer-release)
-----------
**1.0c://Symon:** has email gen, and epic keyword spreadsheet functionality
- relevant UI that is responsive and interactive.

- Symon will have a UI that facilitates searchable auxiliary database for items such as Epic Keywords; community connect practices and users; AH assignments etc

Current Task(s)
-------------
- Adding in badge or other notify of copy success.
  => have done this but we need to make it conditional; currently just gives indicator of click and vanishes with tab close. It needs intelligence; in other words we need to be able to predict and capture what kind of errors people will use. ( CURRENTLY IN HIATUS )
  [this is causing an issue in that I don't know how ot properly send messages from content.js to background .js ; or rather, I'm not sure how to listen]

- Needs to restrict itself to a set of URLs and also (possibly)
