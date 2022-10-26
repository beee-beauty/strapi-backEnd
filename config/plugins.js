module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                params: {
                    Bucket: env('AWS_BUCKET'),
                },
            },
        },
    },
    email: {
        config: {
            provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'juliasedefdjian@strapi.io',
                defaultReplyTo: 'juliasedefdjian@strapi.io',
                testAddress: 'juliasedefdjian@strapi.io',
            },
        },
    },
    // ...
});