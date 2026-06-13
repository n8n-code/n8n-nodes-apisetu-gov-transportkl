import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportklApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportklApi';

        displayName = 'Apisetu Gov Transportkl API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportkl/apisetu-gov-transportkl.svg', dark: 'file:../nodes/ApisetuGovTransportkl/apisetu-gov-transportkl.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportkl/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportkl/v3',
                        description: 'The base URL of your Apisetu Gov Transportkl API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
