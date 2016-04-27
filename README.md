The web-application ('amarIpodApp') built using Google Polymer (a project of 'My Ipod Customizer Application')

Frontend/ GUI of the project.
User will be able to upload, view, edit and then save the changes to the MP3 file metadata via this web-application,
On a higher note, 3 main micro-services will reside behind this web-app; namely:

1. s3-upload-listener (https://github.com/aritranayak/s3-upload-listener)
2. read-mp3-metadata-microservice (https://github.com/aritranayak/read-mp3-metadata-microservice)
3. update-save-mp3-metadata-microservice (WIP)


Note: The idea is to deploy this as a static web-app in Amazon S3. All communications with the micro-services will occur via API Gateway calls. The Rest services exposed by the AWS API Gateway will be consumed by Polymer code.

For the bigger picture, the intention is to be able to update the various metadata of a MP3 file, in a user friendly manner.
This is particularly useful for people having trouble to sort their music files via iTunes. Using the complete set of micro-services and web application associated with the project,anyone would be able to edit their mp3 file's metadata.

Getting Started

Clone this project and you will be able to start working on it. To run the application as-is, you need to have an AWS account.

Pre-requisities

 1. See the Pre-requisities section for 'https://github.com/aritranayak/s3-upload-listener' 

Development

	Building

To build 'amarIpodApp', you will need:

Google Polymer - v1.0
Grunt
bower
npm
less


Other Useful grunt lifecycles:

connect - 'See your web-app locally at http://localhost:9000/'

Deployment

	After installing these tools simply run 'grunt build' and find the 'archive.zip' folder. This can be extracted in a different location & uploaded to a S3 bucket for website hosting.
	

Built With

    Grunt

Contributing

If you have added a feature or fixed a bug in 'amarIpodApp' please submit a pull request as follows:

Fork the project
Write the code for your feature or bug fix
Please don't auto-format the code or make wholesale whitespace changes as it makes seeing what has changed more difficult
Add tests! This is important so the code you've added doesn't get unintentionally broken in the future
Make sure the existing tests pass
Commit and do not mess with version or history
Submit a pull request
Thanks for sharing!


Authors

    Aritra Nayak - Initial work

License

This project is licensed under the MIT License - see the LICENSE.md file for details
