/*
 * Copyright (c) 2020 American Well Systems
 * All rights reserved.
 *
 * It is illegal to use, reproduce or distribute
 * any part of this Intellectual Property without
 * prior written authorization from American Well.
 *
 */
declare module "awsdk" {

    namespace awsdk {

        /**
         * AWSDKValidationErrors is a class that serves as a wrapper around an array of {@link AWSDKError}.
         */
        class AWSDKValidationErrors {
            /**
             * AWSDKValidationErrors is a class that serves as a wrapper around an array of {@link AWSDKError}.
             */
            constructor();

            /**
             * An array of {@link AWSDKError} obtained from form validation, if any.
             */
            errors: AWSDKError[];

        }

        /**
         * This class represents a wrapper class for any Error encountered by the AWSDK library during interaction with the server or internal to the AWSDK.
         * Its purpose is to provide a more digestible data type for error encapsulation and handling.
         */
        class AWSDKError {
            /**
             * This class represents a wrapper class for any Error encountered by the AWSDK library during interaction with the server or internal to the AWSDK.
             * Its purpose is to provide a more digestible data type for error encapsulation and handling.
             */
            constructor();

            /**
             * The {@link AWSDKErrorCode} associated with this error object.
             */
            errorCode: AWSDKErrorCode;

            /**
             * String message clarifying the error.
             */
            message: string;

            /**
             * String explanation for the cause of the error.
             */
            reason: string;

            /**
             * String suggesting a possible recovery strategy, if applicable.
             */
            recoverySuggestion: string;

            /**
             * Integer representing the http error code associated with the error.
             */
            httpResponseCode: number;

            /**
             * The name of the field that caused the error being thrown, if any.
             */
            fieldName: string;

            /**
             * An array of errors found during validation.
             */
            errors: AWSDKError[];

            /**
             * A String representing the state of the stack at the time the error was thrown.
             */
            stackTrace: string;

            static AWSDKInvalidTimeZone(): void;

            static AWSDKGuestEmailAlreadyInvited(): void;

        }

        /**
         * Namespace for AWSDKErrorCode.
         * @readonly
         * @enum
         */
        enum AWSDKErrorCode {
            /**
             * A client attempted to access a resource that it does not have permission to access. For example, a consumer tried
             * to get secure messages that belong to another consumer.
             * @since 1.0.0
             */
            authenticationAccessDenied = 'authenticationAccessDenied',
            /**
             * The authenticate session has expired.
             * @since 1.0.0
             */
            authenticationSessionExpired = 'authenticationSessionExpired',
            /**
             * certificatePinningError while making a request.
             * @since 1.0.0
             */
            certificatePinningError = 'certificatePinningError',
            /**
             * Consumer already in a visit.
             * @since 1.0.0
             */
            consumerAlreadyInVisit = 'consumerAlreadyInVisit',
            /**
             * Consumer is busy.
             * @since 1.0.0
             */
            consumerBusy = 'consumerBusy',
            /**
             * Consumer not authenticated.
             * @since 1.0.0
             */
            consumerNotAuthenticated = 'consumerNotAuthenticated',
            /**
             * Consumer not found.
             * @since 1.0.0
             */
            consumerNotFound = 'consumerNotFound',
            /**
             * Cost validation has not been finished.
             * @since 1.0.0
             */
            costCalculationNotFinishedError = 'costCalculationNotFinishedError',
            /**
             * Credit card used as payment method has been declined.
             * @since 1.0.0
             */
            creditCardDeclinedError = 'creditCardDeclinedError',
            /**
             * Invalid CVV code for credit card used as payment method.
             * @since 1.0.0
             */
            creditCardInvalidCVV = 'creditCardInvalidCVV',
            /**
             * Invalid zip code for credit card used as payment method.
             * @since 1.0.0
             */
            creditCardInvalidZipCode = 'creditCardInvalidZipCode',
            /**
             * Credit card used as payment method validation has failed.
             * @since 1.0.0
             */
            creditCardValidationError = 'creditCardValidationError',
            /**
             * Dependent not found.
             * @since 1.1.0
             */
            dependentNotFound = 'dependentNotFound',
            /**
             * Dependent overage.
             * @since 1.1.0
             */
            dependentOverage = 'dependentOverage',
            /**
             * Dependent's date of birth is in the future.
             * @since 1.1.0
             */
            dependentDobInFuture = 'dependentDobInFuture',
            /**
             * Dependent match found.
             * @since 1.3.0
             */
            dependentMatchFound = 'dependentMatchFound',
            /**
             * Empty response from rest call.
             * @since 1.0.0
             */
            emptyResponseError = 'emptyResponseError',
            /**
             * Feedback not sent.
             * @since 1.0.0
             */
            feedbackNotSubmittedError = 'feedbackNotSubmittedError',
            /**
             * A required field in an object is not set or has an incorrect value.
             *
             * @since 1.0.0
             */
            fieldValidationError = 'fieldValidationError',
            /**
             * Illegal Argument.
             * @since 1.0.0
             */
            illegalArgument = 'illegalArgument',
            /**
             * Internal Error.
             * @since 1.0.0
             */
            internalError = 'internalError',
            /**
             * Validation of coupon code failed.
             * @since 1.0.0
             */
            invalidCouponError = 'invalidCouponError',
            /**
             * Validation of date failed.
             * @since 1.1.0
             */
            invalidDate = 'invalidDate',
            /**
             * Validation of date format failed.
             * @since 1.1.0
             */
            invalidDateFormat = 'invalidDateFormat',
            /**
             * Validation of enum failed.
             * @since 1.1.0
             */
            invalidEnum = 'invalidEnum',
            /**
             * Validation of enum format failed.
             * @since 1.1.0
             */
            invalidEnumFormat = 'invalidEnumFormat',
            /**
             * Invalid password.
             * @since 1.1.0
             */
            invalidPassword = 'invalidPassword',
            /**
             * Validation of reminder option failed.
             * @since 1.1.0
             */
            invalidReminderOption = 'invalidReminderOption',
            /**
             * Validation of service key failed.
             * @since 1.0.0
             */
            invalidServiceKeyError = 'invalidServiceKeyError',
            /**
             * locale is not supported by caretalks.
             * @since 1.0.0
             */
            localeNotSupported = 'localeNotSupported',
            /**
             * No payment information was found for consumer.
             *
             * @since 1.0.0
             */
            noPaymentInformationFound = 'noPaymentInformationFound',
            /**
             * The error contains an thrown Error.
             *
             * @since AWSDK 1.0
             */
            otherError = 'otherError',
            /**
             * Error parsing the response.
             * @since 1.0.0
             */
            parsingError = 'parsingError',
            /**
             * The authenticated user has not completed the registration process.
             * @since 1.0.0
             */
            partiallyRegisteredUser = 'partiallyRegisteredUser',
            /**
             * The server is not configured with a consumer provider policy disclaimer.
             * @since 1.0.0
             */
            privacyPolicyDisclaimerMissing = 'privacyPolicyDisclaimerMissing',
            /**
             * The provider is busy and no longer available.
             * @since 1.0.0
             */
            providerBusy = 'providerBusy',
            /**
             * Provider's waiting room is closed.
             * @since 1.0.0
             */
            providerNotAvailable = 'providerNotAvailable',
            /**
             * The provider could not be found.
             * @since 1.0.0
             */
            providerNotFound = 'providerNotFound',
            /**
             * Provider is not licensed for consumer's location.
             * @since 1.0.0
             */
            providerNotLicensedForConsumerLocation = 'providerNotLicensedForConsumerLocation',
            /**
             * The provider is not enabled to use video.
             * @since 1.0.0
             */
            providerVideoNotEnabled = 'providerVideoNotEnabled',
            /**
             * Rating not sent.
             * @since 1.0.0
             */
            ratingNotSubmittedError = 'ratingNotSubmittedError',
            /**
             * Generic Server Error Response.
             * @since 1.0.0
             */
            responseError = 'responseError',
            /**
             * Schedule appointment failed.
             * @since 1.1.0
             */
            scheduleAppointmentFailed = 'scheduleAppointmentFailed',
            /**
             * Start visit failed.
             * @since 1.0.0
             */
            startVisitFailed = 'startVisitFailed',
            /**
             * Appointment not found.
             * @since 1.1.0
             */
            appointmentNotFound = 'appointmentNotFound',
            /**
             * The SDK is uninitialized. Initialize it using {@link AWSDK#initialize};
             * @since 1.0.0
             */
            uninitialized = 'uninitialized',
            /**
             * Attempt to update the consumerAuthKey on the Amwell telehealth platform failed.
             * @since 1.0.0
             */
            updateConsumerAuthKeyFailed = 'updateConsumerAuthKeyFailed',
            /**
             * This consumer is already registered and should be directed to login. <b>Deprecated</b> since version 1.4.0 please use {@link AWSDKErrorCode.validationEmailInUse}
             * @deprecated since version 1.4.0 please use {@link AWSDKErrorCode.validationEmailInUse}
             * @since 1.0.0
             */
            validationConsumerAlreadyRegistered = 'validationConsumerAlreadyRegistered',
            /**
             * Cannot register underage consumer.
             *
             * @since 1.0.0
             */
            validationConsumerUnderage = 'validationConsumerUnderage',
            /**
             * This email address is already being used by another user.
             *
             * @since 1.0.0
             */
            validationEmailInUse = 'validationEmailInUse',
            /**
             * This source id is already being used by another consumer.
             *
             * @since 1.0.0
             */
            validationSourceIdInUse = 'validationSourceIdInUse',
            /**
             * Validation of parameter failed.
             * @since 1.0.0
             */
            validationError = 'validationError',
            /**
             * The provided address is incomplete or malformed.
             *
             * @since 2.0.0
             */
            validationIncompleteAddress = 'validationIncompleteAddress',
            /**
             * More then one validation error.
             * @since 1.0.0
             */
            validationErrors = 'validationErrors',
            /**
             * One or more required parameters were missing or invalid in the request.
             * @since 1.0.0
             */
            validationRequiredParameterMissing = 'validationRequiredParameterMissing',
            /**
             * Connection to the Vidyo server failed.
             * @since 1.0.0
             */
            videoConnectionFailure = 'videoConnectionFailure',
            /**
             * Visit has an invalid consumer callback number.
             * @since 1.0.0
             */
            visitConsumerCallbackInvalid = 'visitConsumerCallbackInvalid',
            /**
             * Visit has expired.
             * @since 1.0.0
             */
            visitExpired = 'visitExpired',
            /**
             * Visit is invalid.
             * @since 1.0.0
             */
            visitInvalid = 'visitInvalid',
            /**
             * Visit Summary not sent.
             * @since 1.0.0
             */
            visitSummaryNotSentError = 'visitSummaryNotSentError',
            /**
             * Visit not found.
             * @since 1.1.0
             */
            visitNotFound = 'visitNotFound',
            /**
             * Provider does not accept waiting room requests from consumer.
             * @since 1.0.0
             */
            waitingRoomAccessDenied = 'waitingRoomAccessDenied',
            /**
             * The length of the medication search text String does not meet requirements.
             * @since 1.0.0
             */
            medicationSearchTextTooShort = 'medicationSearchTextTooShort',
            /**
             * Consumer already registered.
             * @since 1.0.0
             */
            consumerAlreadyRegistered = 'consumerAlreadyRegistered',
            /**
             * The size of the attachment in kilobytes is larger than that supported by the Amwell telehealth platform.
             * @since 1.0.0
             */
            attachmentSizeTooLarge = 'attachmentSizeTooLarge',
            /**
             * The mime type of the data is not supported by the Amwell telehealth platform.
             * @since 1.0.0
             */
            unsupportedMimeType = 'unsupportedMimeType',
            /**
             * The attachment failed the virus scan by the Amwell telehealth platform.
             * @since 1.2.0
             */
            failedVirusScan = 'failedVirusScan',
            /**
             * The attachment already exists on the Amwell telehealth platform.
             * @since 1.2.0
             */
            fileExists = 'fileExists',
            /**
             * The attachment couldnt be read by the Amwell telehealth platform.
             * @since 1.2.0
             */
            fileReadError = 'fileReadError',
            /**
             * Consumer's health plan is feed controlled.
             * @since 1.0.0
             */
            healthPlanIsFeedControlled = 'healthPlanIsFeedControlled',
            /**
             * Inaccurate subscriber information was rejected by the eligibility check.
             * @since 1.2.0
             */
            inaccurateSubscriberInfo = 'inaccurateSubscriberInfo',
            /**
             * Invalid values for either the subscriber id or suffix id of the health plan.
             * @since 1.3.0
             */
            healthPlanSubscriptionEnrollmentError = 'healthPlanSubscriptionEnrollmentError',
            /**
             * The eligibility check returned an error.
             * @since 1.0.0
             */
            eligibilityCheckError = 'eligibilityCheckError',
            /**
             * No providers were found during the First Available search.
             * @since 1.1.0
             */
            noProvidersAvailable = 'noProvidersAvailable',

            /**
             * A poll exceeded its alloted time.
             * @since 1.1.0
             */
            pollingTimeout = 'pollingTimeout',

            /**
             * The specified on-demand specialty was not found.
             * @since 1.1.0
             */
            onDemandSpecialtyNotFound = 'onDemandSpecialtyNotFound',

            /**
             * An API of the AWSDK was invoked improperly.
             * @since 1.1.0
             */
            illegalUsage = 'illegalUsage',
            /**
             * The recipient of a secure message sent from a consumer cannot be a consumer.
             * @since 1.1.0
             */
            consumerRecipientError = 'consumerRecipientError',
            /**
             * The recipient of this secure message does not accept secure messages.
             * @since 1.1.0
             */
            doesNotAcceptSecureMessages = 'doesNotAcceptSecureMessages',
            /**
             * The email address associated with the request was not found.
             * @since 1.1.0
             */
            emailAddressNotFound = 'emailAddressNotFound',
            /**
             * The Telehealth platform is incompatible with this version of the sdk.
             * @since 1.1.0
             */
            versionIncompatible = 'versionIncompatible',
            /**
             * The modified field is protected.
             * @since 1.1.0
             */
            modifiedProtectedField = 'modifiedProtectedField',
            /**
             * No preferred pharmacy was found for the consumer.
             * @since 1.2.0
             */
            noPreferredPharmacyFound = 'noPreferredPharmacyFound',
            /**
             * No shipping address was found for the consumer.
             * @since 1.2.0
             */
            noShippingAddressFound = 'noShippingAddressFound',
            /**
             * SpeedPass is not enabled on the system.
             * @since 1.2.0
             */
            speedPassDisabled = 'speedPassDisabled',
            /**
             * Consumer is not eligible for speedPass.
             * @since 1.2.0
             */
            consumerNotEligibleForSpeedPass = 'consumerNotEligibleForSpeedPass',
            /**
             * TimeZone is not a valid canonical timezone.
             * @since 1.4.0
             */
            invalidTimeZone = 'invalidTimeZone',
            /**
             * Invalid parameter.
             * @since 1.2.0
             */
            invalidParameter = 'invalidParameter',
            /**
             * Guest email is already invited.
             * @since 2.0.0
             */
            guestEmailAlreadyInvited = 'guestEmailAlreadyInvited',
        }

        /**
         * This is the main entry point of the Amwell Consumer Web SDK.
         */
        class AWSDK {
            /**
             * This is the main entry point of the Amwell Consumer Web SDK.
             */
            constructor(loggerConfig?: loggerConfig);

            /**
             * Required call to initialize the AWSDK.
             * Upon success, the AWSDK instance will be initialized and configured.
             * @param config The configuration used to initialize the sdk.
             * @param config.sdkApiKey The SDK key to use for identifying the client.
             * @param config.baseUrl=https://sdk.myonlinecare.com/ The base Amwell telehealth platform URL to target.
             * @param config.locale The locale used for all SDK requests.
             * @param config.visitPollingInterval the interval in milliseconds between requests to update the visit while the visit is started
             * @param config.visitCostPollingInterval the interval in milliseconds between requests to update the visitCost while the visitCost is calculating
             * @param config.visitCostPollingTimeout the timeout in milliseconds to wait for the visitCost to finish calculating
             * @param config.eligibilityPollingInterval the interval in milliseconds between requests to update the eligibility while the insurance subscription is being updated
             * @param config.eligibilityPollingTimeout the timeout in milliseconds to wait for the eligibility request while the insurance subscription is being updated
             * @param config.firstAvailablePollingInterval the interval in milliseconds between requests to determine the status of an ongoing first available search
             * @param config.firstAvailablePollingTimeout the timeout in milliseconds to wait for the first available search to complete
             * @param config.launchTelehealthVideoClientTimeout the timeout in milliseconds to wait for the telehealth video client to launch
             * @param config.ignorePropagation a boolean that determines whether or not a parent's account information should propagate to the dependents. This is set to false by default @since 1.4.0
             */
            initialize(config?: initialize_config): Promise<boolean>;

            /**
             * Reinitializes the AWSDK using a new locale.
             * Upon success, the AWSDK instance will be re-initialized and configured for the new locale.
             * @param locale The locale used for all SDK requests. See https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4 for details.
             */
            changeLocale(locale?: string): Promise<boolean>;

            /**
             * Get an {@link AuthenticationService}.
             */
            authenticationService: AuthenticationService;

            /**
             * Get a {@link ConsumerService}.
             */
            consumerService: ConsumerService;

            /**
             * Get a {@link MedicationService}.
             */
            medicationService: MedicationService;

            /**
             * Get a {@link PharmacyService}.
             */
            pharmacyService: PharmacyService;

            /**
             * Get a {@link PracticeService}.
             */
            practiceService: PracticeService;

            /**
             * Get a {@link ProviderService}.
             */
            providerService: ProviderService;

            /**
             * Get a {@link VisitService}.
             */
            visitService: VisitService;

            /**
             * Get a {@link TestMyComputerService}.
             */
            testMyComputerService: TestMyComputerService;

            /**
             * Get a {@link AppointmentService}.
             */
            appointmentService: AppointmentService;

            /**
             * Get a {@link SecureMessageService}.
             */
            secureMessageService: SecureMessageService;

            /**
             * Get a {@link IVRService}.
             */
            IVRService: IVRService;

            /**
             * Get a {@link DeviceLiveStreamService}.
             */
            deviceLiveStreamService: DeviceLiveStreamService;

            /**
             * This method will get an array of {@link AWSDKCreditCardType}.
             */
            getCreditCardTypes(): Promise<AWSDKCreditCardType[]>;

            /**
             * This method will get an array of  {@link AWSDKLanguage}.
             */
            getLanguages(): Promise<AWSDKLanguage[]>;

            /**
             * This method will get an array of  {@link AWSDKCountry}.
             */
            getCountries(): Promise<AWSDKCountry[]>;

            /**
             * This method will get an array of {@link AWSDKHealthPlan}.
             */
            getHealthPlans(): Promise<AWSDKHealthPlan[]>;

            /**
             * This method will get an array of {@link AWSDKRelationshipToSubscriberCode}.
             */
            getRelationshipsToSubscriber(): Promise<AWSDKRelationshipToSubscriberCode[]>;

            /**
             * This method will get an array of {@link AWSDKTopicType}.
             */
            getTopicTypes(): Promise<AWSDKTopicType[]>;

            /**
             * This method will get an array of {@link AWSDKProviderType}.
             */
            getProviderTypes(): Promise<AWSDKProviderType[]>;

            /**
             * This method will get an array of {@link AWSDKPlatformType}.
             */
            getPlatformTypes(): Promise<AWSDKPlatformType[]>;

            /**
             * This method will get an array of {@link AWSDKPracticeSearchType}
             */
            getPracticeSearchTypes(): Promise<AWSDKPracticeSearchType[]>;

            /**
             * This method will get an array of {@link AWSDKTrackerTemplate}.
             * @param searchTerm any sequence of characters to be used to search against.
             */
            searchTrackerTemplates(searchTerm?: string): Promise<AWSDKTrackerTemplate[]>;

            /**
             * This method will get an {@link AWSDKSystemConfiguration}.
             */
            getSystemConfiguration(): AWSDKSystemConfiguration;

            /**
             * This method will get an array of {@link AWSDKModality}.
             */
            getAvailableModalities(): Promise<AWSDKModality[]>;

            /**
             * This method will launch the TelehealthVideo Client in 'Test My Computer' mode.
             * @param authentication if provided will run the Test My Computer workflow and store the result for the authenticated consumer
             */
            launchTestMyComputer(authentication?: AWSDKAuthentication): Promise<boolean>;

            /**
             *
             * @deprecated please use AWSDKFactory.restoreConsumer
             */
            restoreConsumer(): void;

            /**
             *
             * @deprecated please use AWSDKFactory.restorePractice
             */
            restorePractice(): void;

            /**
             *
             * @deprecated please use AWSDKFactory.restoreProviderDetails
             */
            restoreProviderDetails(): void;

            restoreInstanceState(instanceState: any): void;

            instanceState: any;

            /**
             * Whether or not the SDK is initialized.
             */
            readonly initialized: boolean;
        }

        /**
         * Enum for AWSDKUserType.
         */
        enum AWSDKUserType {
            /**
             * Consumer type.
             */
          CONSUMER = 'CONSUMER',
            /**
             * Provider type.
             */
          PROVIDER = 'PROVIDER',
            /**
             * Admin type.
             */
          ADMIN = 'ADMIN',
            /**
             * Provider assistant type.
             */
          ASSISTANT = 'ASSISTANT',
            /**
             * Anonymous SDK user type.
             */
          SDK = 'SDK',
        }

        /**
         * This is the object factory for the Amwell Consumer Web SDK.
         */
        class AWSDKFactory {
            /**
             * This is the object factory for the Amwell Consumer Web SDK.
             */
            constructor();

            /**
             * This method is used to parse and instantiate an AWSDKConsumer from the provided stringifiedConsumer.
             * @param stringifiedConsumer the stringified consumer to restore
             */
            static restoreConsumer(stringifiedConsumer: string): AWSDKConsumer;

            /**
             * This method is used to parse and instantiate an AWSDKAuthentication from the provided stringifiedAuthentication.
             * @param stringifiedAuthentication the stringified authentication to restore
             */
            static restoreAuthentication(stringifiedAuthentication: string): AWSDKAuthentication;

            /**
             * This method is used to parse and instantiate an AWSDKPractice from the provided stringifiedPractice.
             * @param stringifiedPractice the stringified practice to restore
             */
            static restorePractice(stringifiedPractice: string): AWSDKPractice;

            /**
             * This method is used to parse and instantiate an AWSDKProviderDetails from the provided stringifiedProviderDetails.
             * @param stringifiedProviderDetails the stringified provider details to restore
             */
            static restoreProviderDetails(stringifiedProviderDetails: string): AWSDKProviderDetails;

            /**
             * This method is used to parse and instantiate an AWSDKVisitContext from the provided stringifiedVisitContext.
             * @param stringifiedVisitContext the stringified visit context to restore
             */
            static restoreVisitContext(stringifiedVisitContext: string): AWSDKVisitContext;

            /**
             * This method is used to parse and instantiate an AWSDKVisit from the provided stringifiedVisit.
             * @param stringifiedVisit the stringified visit to restore
             */
            static restoreVisit(stringifiedVisit: string): AWSDKVisit;

            /**
             * This method is used to parse and instantiate an AWSDKVisitSummary from the provided stringifiedVisitSummary.
             * @param stringifiedVisitSummary the stringified visit summary to restore
             */
            static restoreVisitSummary(stringifiedVisitSummary: string): AWSDKVisitSummary;

            /**
             * This method is used to parse and instantiate an AWSDKPaymentMethod from the provided stringifiedPaymentMethod.
             * @param stringifiedPaymentMethod the stringified payment method to restore
             */
            static restorePaymentMethod(stringifiedPaymentMethod: string): AWSDKPaymentMethod;

            /**
             * This method is used to parse and instantiate an AWSDKAppointment from the provided stringifiedAppointment.
             * @param stringifiedAppointment the stringified appointment to restore
             */
            static restoreAppointment(stringifiedAppointment: string): AWSDKAppointment;

            /**
             * This method is used to parse and instantiate an AWSDKOnDemandSpecialty from the provided stringifiedOnDemandSpecialty.
             * @param stringifiedOnDemandSpecialty the stringified on demand specialty to restore
             */
            static restoreSpecialty(stringifiedOnDemandSpecialty: string): AWSDKOnDemandSpecialty;

            /**
             * This method is used to parse and instantiate an AWSDKVideoParticipant from the provided stringifiedVideoParticipant.
             * @param stringifiedVideoParticipant the stringified video participant to restore
             */
            static restoreParticipant(stringifiedVideoParticipant: string): AWSDKVideoParticipant;

            /**
             * This method is used to parse and instantiate an AWSDKTrackerTemplate from the provided stringifiedTrackerTemplate.
             * @param stringifiedTrackerTemplate the stringified tracker template to restore
             */
            static restoreTrackerTemplate(stringifiedTrackerTemplate: string): AWSDKTrackerTemplate;

            /**
             * This method is used to parse and instantiate an AWSDKOnlineVisitFollowUpItem from the provided
             * @param stringifiedOnlineVisitFollowUpItem
             */
            static restoreOnlineVisitFollowUpItem(stringifiedOnlineVisitFollowUpItem: string): AWSDKOnlineVisitFollowUpItem;

        }



        /**
         * This class contains all necessary information for representing an appointment.
         */
        class AWSDKAppointment extends AWSDKEntity {
            /**
             * This class contains all necessary information for representing an appointment.
             */
            constructor();

            /**
             * The assigned provider.
             */
            assignedProvider: AWSDKProviderDetails;

            /**
             * The proxy provider.
             */
            proxyProvider: AWSDKProvider;

            /**
             * The consumer.
             */
            consumer: AWSDKConsumer;

            /**
             * The consumer proxy.
             */
            consumerProxy: AWSDKConsumer;

            /**
             * The cost of the appointment.
             */
            cost: AWSDKVisitCost;

            /**
             * The schedule for the appointment.
             */
            schedule: AWSDKVisitScheduled;

            /**
             * The check in status for the appointment.
             */
            checkInStatus: AWSDKCheckInStatus;

            /**
             * An array of {@link AWSDKTopic} objects.
             */
            topics: AWSDKTopic[];

            /**
             * The practice name for the appointment.
             */
            practiceName: string;

            /**
             * The disposition for the appointment.
             */
            disposition: AWSDKDisposition;

            /**
             * The provider's specialty.
             */
            specialty: AWSDKProviderType;

            /**
             * The note to the patient for the appointment.
             */
            noteToPatient: string;

            /**
             * The url to more details for this appointment.
             */
            href: string;

            /**
             * The sourceId related to this appointment.
             */
            sourceId: string;

            /**
             * The consumer's preferred phone number for this appointment.
             */
            initiatorOverridePhoneNumber: string;

            /**
             * The consumer's preferred formatted phone number for this appointment.
             */
            formattedInitiatorOverridePhoneNumber: string;

            /**
             * Rhe modality for this appointment.
             */
            modality: AWSDKModality;

            proxies: any;

        }

        /**
         * Enum for AWSDKDeviceLiveStreamType to distinguish between different live streams.
         */
        enum AWSDKDeviceLiveStreamType {
            /**
             * Tyto Device.
             */
            TYTO_LIVESTREAM = 'TYTO_LIVESTREAM',
        }

        /**
         * Enum for AWSDKDeviceIntegrationMode represents the device modes.
         */
        enum AWSDKDeviceIntegrationMode {
            /**
             * Tyto device Live Stream mode.
             */
            TYTO_LIVESTREAM = 'TYTO_LIVESTREAM',
            /**
             * Device is disabled.
             */
            DISABLED = 'DISABLED',
            /**
             * Tyto device store and forward mode.
             */
            TYTO_STOREANDFORWARD = 'TYTO_STOREANDFORWARD'
        }

        /**
         * This class contains all necessary information for representing the device pairing details.
         */
        class AWSDKDevicePairingDetails extends AWSDKEntity {
            /**
             * This class contains all necessary information for representing the device pairing details.
             */
            constructor();

            /**
             * Device device pairing code.
             */
            pairingCode: string;

            /**
             * The remote device server URL.
             */
            applicationServerUrl: string;
        }

        /**
         * This class contains all necessary information for representing the device pairing status.
         */
        class AWSDKDevicePairingStatus extends AWSDKEntity {
            /**
             * This class contains all necessary information for representing the device pairing status.
             */
            constructor();

            /**
             * Device device pairing status.
             */
            devicePairingStatus: AWSDKDevicePairingStatusEnum;

            /**
             * Whether the device is connected to the network.
             */
            isDeviceOnline: boolean;
        }

        /**
         * This class contains all necessary information for representing appointment readiness.
         */
        class AWSDKAppointmentReadiness extends AWSDKEntity {
            /**
             * This class contains all necessary information for representing appointment readiness.
             */
            constructor();

            /**
             * Whether or not the consumer is registered.
             */
            registered: boolean;

            /**
             * Whether or not the tech check is enabled.
             */
            techCheckEnabled: boolean;

            /**
             * Whether or not the tech check has been passed.
             */
            techCheckPassed: boolean;

            /**
             * Whether or not the consumer is ready for the appointment.
             */
            readyForAppointment: boolean;

            /**
             * The date in which the consumer passed tech check.
             */
            datePassedTechCheck: Date;

            /**
             * Boolean describing whether or not the microphone test was successfully completed.
             */
            microphonePassed: boolean;

            /**
             * Boolean describing whether or not the speaker test was successfully completed.
             */
            speakerPassed: boolean;

            /**
             * Boolean describing whether or not the camera test was successfully completed.
             */
            cameraPassed: boolean;

            /**
             * The numeric value representing the download speed registered by the testing tool.
             */
            downloadSpeedMbps: number;

            /**
             * The numeric float value representing the upload speed registered by the testing tool.
             */
            uploadSpeedMbps: number;

            /**
             * The numeric float value representing the latency registered by the testing tool.
             */
            latencyMs: number;

            /**
             * The numeric integer value representing the variation in latency on a packet flow between two systems.
             */
            jitter: number;

            /**
             * The string name of the microphone device.
             */
            microphoneDeviceName: string;

            /**
             * The string name of the speaker device.
             */
            speakerDeviceName: string;

            /**
             * The string name of the front-facing camera.
             */
            cameraDeviceName: string;

            /**
             * The source id for this appointment readiness request.
             */
            sourceId: string;

            /**
             * The platform type that the latest readiness test was performed on.
             */
            platformType: AWSDKPlatformType;

            /**
             * The appointment for this appointment readiness request.
             */
            appointment: AWSDKAppointment;

            /**
             * The platform version that the latest readiness test was performed on.
             */
            platformVersion: string;

        }

        /**
         * This class should be used to update an appointment readiness. Get an instance of this class by calling {@see AppointmentService#getNewAppointmentReadinessRequest|AppointmentService.getNewAppointmentReadinessRequest}.
         */
        class AWSDKAppointmentReadinessRequest {
            /**
             * This class should be used to update an appointment readiness. Get an instance of this class by calling {@see AppointmentService#getNewAppointmentReadinessRequest|AppointmentService.getNewAppointmentReadinessRequest}.
             */
            constructor();

            /**
             * The date the consumer passed the tech check.
             */
            datePassedTechCheck: Date;

            /**
             * Boolean describing whether or not the microphone test was successfully completed.
             */
            microphonePassed: boolean;

            /**
             * Boolean describing whether or not the speaker test was successfully completed.
             */
            speakerPassed: boolean;

            /**
             * Boolean describing whether or not the camera test was successfully completed.
             */
            cameraPassed: boolean;

            /**
             * The numeric value representing the download speed registered by the testing tool.
             */
            downloadSpeedMbps: number;

            /**
             * The numeric float value representing the upload speed registered by the testing tool.
             */
            uploadSpeedMbps: number;

            /**
             * The numeric float value representing the latency registered by the testing tool.
             */
            latencyMs: number;

            /**
             * The numeric integer value representing the variation in latency on a packet flow between two systems.
             */
            jitter: number;

            /**
             * The string name of the microphone device.
             */
            microphoneDeviceName: string;

            /**
             * The string name of the speaker device.
             */
            speakerDeviceName: string;

            /**
             * The string name of the front-facing camera.
             */
            cameraDeviceName: string;

            /**
             * The source id for this appointment readiness request.
             */
            sourceId: string;

            /**
             * Boolean defining whether or not tech check passed.
             */
            techCheckPassed: boolean;

            /**
             * The appointment associated with the readiness test.
             */
            appointment: AWSDKAppointment;

        }

        /**
         * The AWSDKAppointmentUpdateRequest class represents a request to update an Appointment for a consumer. It is an expected parameter for the {@link AppointmentService#updateAppointment|AppointmentService.updateAppointment} function.
         * Get an instance of this via {@link AppointmentService#getNewAppointmentUpdateRequest|AppointmentService.getNewAppointmentUpdateRequest}.
         */
        class AWSDKAppointmentUpdateRequest {
            /**
             * The AWSDKAppointmentUpdateRequest class represents a request to update an Appointment for a consumer. It is an expected parameter for the {@link AppointmentService#updateAppointment|AppointmentService.updateAppointment} function.
             * Get an instance of this via {@link AppointmentService#getNewAppointmentUpdateRequest|AppointmentService.getNewAppointmentUpdateRequest}.
             */
            constructor();

            /**
             * The override phone number associated with the appointment update request.
             */
            initiatorOverridePhoneNumber: string;

            /**
             * This method is a convenience method for presenting this object as a JSON string.
             */
            getAsJSONString(): string;

        }

        /**
         * Namespace for AWSDKCheckInStatus.
         * @readonly
         * @enum {string}
         */
        enum AWSDKCheckInStatus {
            /**
             * On time for the appointment, within the window.
             */
            ON_TIME = 'ON_TIME',
            /**
             * Early for the appointment, before the window.
             */
            EARLY = 'EARLY',
            /**
             * Late for the appointment; after the window.
             */
            LATE = 'LATE',
            /**
             * Provider not available for the appointment.
             */
            NO_PROVIDER = 'NO_PROVIDER',
        }

        /**
         * Enum for AWSDKDevicePairingStatusEnum.
         */
        enum AWSDKDevicePairingStatusEnum {
            /**
             * Indicating that the device is paired.
             */
          PAIRED = 'PAIRED',
            /**
             * Indicating that the device is not paired.
             */
          NOT_PAIRED = 'NOT_PAIRED',
            /**
             * Indicating that the device is already paired.
             */
          PREVIOUSLY_PAIRED = 'PREVIOUSLY_PAIRED',
        }

        /**
         * This class contains information used to set an appointment reminder.
         */
        class AWSDKReminderOption extends AWSDKDataObject {
            /**
             * This class contains information used to set an appointment reminder.
             */
            constructor();

            /**
             * The label for the Reminder Option.
             */
            label: string;

            /**
             * The value for the Reminder Option.
             */
            value: string;

            /**
             * The number of minutes before the appointment to sent the reminder.
             */
            minutes: number;

        }

        /**
         * AWSDKAuthentication class represents an authentication object that encapsulates common AWSDK authentication fields, which simplify authentication
         * against an instance of the AWSDK.
         */
        class AWSDKAuthentication extends AWSDKDataObject {
            /**
             * AWSDKAuthentication class represents an authentication object that encapsulates common AWSDK authentication fields, which simplify authentication
             * against an instance of the AWSDK.
             */
            constructor();

            /**
             * True if the user was authenticated, but needs to complete the registration process.
             */
            needsToCompleteRegistration: boolean;

            /**
             * True if the user's credentials where generated by the system.
             */
            credentialsSystemGenerated: boolean;

            /**
             * The consumer data.
             */
            consumer: AWSDKConsumer;

            /**
             * A convenience method to get a {@link AWSDKServerLogParam} object.
             * @returns the server log param object
             */
            getServerLogParam(): Object;

        }

        /**
         * AWSDKRecoverEmail class has the status of the recover email request with the redacted email if the status is EMAIL_RECOVERED.
         */
        class AWSDKRecoverEmail extends AWSDKDataObject {
            /**
             * AWSDKRecoverEmail class has the status of the recover email request with the redacted email if the status is EMAIL_RECOVERED.
             */
            constructor();

            /**
             * The status of the object.
             */
            status: AWSDKRecoverEmailStatus;

            /**
             * The value of the object.
             */
            email: string;

        }

        /**
         * Enum for AWSDKRecoverEmailStatus.
         */
        enum AWSDKRecoverEmailStatus {
            /**
             * Email was successfully recovered.
             */
          EMAIL_RECOVERED = 'EMAIL_RECOVERED',
            /**
             * Username was emailed to the user.
             */
          USERNAME_EMAILED = 'USERNAME_EMAILED',
        }

        /**
         * Base class to represent different types of users.
         */
        class AWSDKAccount extends AWSDKEntity {
            /**
             * Base class to represent different types of users.
             */
            constructor();

            /**
             * The firstname on the account.
             */
            firstName: string;

            /**
             * The middle initial on the account.
             */
            middleInitial: string;

            /**
             * The lastname on the account.
             */
            lastName: string;

            /**
             * The full name on the account.
             */
            fullName: string;

        }

        /**
         * AWSDKAddress class contains all the information necessary to correctly represent a physical residential address.
         */
        class AWSDKAddress extends AWSDKDataObject {
            /**
             * AWSDKAddress class contains all the information necessary to correctly represent a physical residential address.
             */
            constructor();

            /**
             * The first line of the address.
             */
            address1: string;

            /**
             * The second line of the address.
             */
            address2: string;

            /**
             * The city name.
             */
            city: string;

            /**
             * The actual underlying {@link AWSDKState} of the address.
             */
            geographicalState: AWSDKState;

            /**
             * The two letter code for the state. example: MA.
             */
            stateCode: string;

            /**
             * The name of the state.
             */
            stateName: string;

            /**
             * The standardized country code for a particular country.
             */
            countryCode: string;

            /**
             * The name of the country.
             */
            countryName: string;

            /**
             * The zip (postal) code for this physical location.
             */
            zipCode: string;

            /**
             * The formatted address for display purposes.
             */
            formattedAddress: string;

            /**
             *
             * @deprecated in favor of {@link AWSDKAddress.formattedAddress}
             */
            formmatedAddress: string;

        }

        /**
         * Contains requisite information for updating an {@link AWSDKAddress}.
         */
        class AWSDKAddressUpdate extends AWSDKDataObject {
            /**
             * Contains requisite information for updating an {@link AWSDKAddress}.
             */
            constructor();

            /**
             * The first line of the address.
             */
            address1: string;

            /**
             * The second line of the address.
             */
            address2: string;

            /**
             * The city name.
             */
            city: string;

            /**
             * The actual underlying {@link AWSDKState} of the address.
             */
            geographicalState: AWSDKState;

            /**
             * The zip (postal) code for this physical location.
             */
            zipCode: string;

        }

        /**
         * AWSDKCountry class represents a physical country.
         */
        class AWSDKCountry extends AWSDKDataObject {
            /**
             * AWSDKCountry class represents a physical country.
             */
            constructor();

            /**
             * The country code.
             */
            code: string;

            /**
             * The country name.
             */
            name: string;

            /**
             * The array of states in the country.
             */
            states: AWSDKState[];

        }

        /**
         * The base class for all data objects in AWSDK.
         */
        abstract class AWSDKDataObject {
            /**
             * The base class for all data objects in AWSDK.
             */
            constructor();

        }

        /**
         * The base class for a Page of results.
         */
        abstract class AWSDKPaginated {
            /**
             * The starting index of this page.
             */
            startIndex: number;
            /**
             * The size of this page of results.
             */
            pageSize: number;
        }

        class AWSDKEntityId {
            /**
             * The encrypted id.
             */
            encryptedId: string;

            /**
             * The persistent id.
             */
            persistentId: string;
        }

        /**
         * The AWSDKDisclaimer class represents a single legal disclaimer for an entity.
         */
        class AWSDKDisclaimer extends AWSDKEntity {
            /**
             * The AWSDKDisclaimer class represents a single legal disclaimer for an entity.
             */
            constructor();

            /**
             * The entity type.
             */
            entityType: AWSDKDisclaimerEntityType;

            /**
             * The entity type enum value.
             */
            entityTypeEnum: string;

            /**
             * The title of this disclaimer.
             */
            title: string;

            /**
             * The text to be displayed in legal jargon.
             */
            legalText: string;

            /**
             * True if this is a required disclaimer, false otherwise.
             */
            required: boolean;

        }

        /**
         * Enum for AWSDKDisclaimerEntityType.
         */
        enum AWSDKDisclaimerEntityType {
            /**
             * The disclaimer type.
             */
          Disclaimer = 'Disclaimer',
            /**
             * The legal entity type.
             */
          LegalEntity = 'LegalEntity',
            /**
             * The specialty legal entity type.
             */
          SpecialtyLegalEntity = 'SpecialtyLegalEntity',
        }

        /**
         * AWSDKEntity class represents the base class for all objects with ids and links.
         */
        class AWSDKEntity extends AWSDKDataObject {
            /**
             * AWSDKEntity class represents the base class for all objects with ids and links.
             */
            constructor();

            /**
             * The id of the object.
             */
            id: AWSDKEntityId;
        }

        /**
         * AWSDKLanguage class represents a language object with all necessary information to successfully describe a language.
         * See {@link AWSDKResource} for details.
         */
        class AWSDKLanguage extends AWSDKResource {
            /**
             * AWSDKLanguage class represents a language object with all necessary information to successfully describe a language.
             * See {@link AWSDKResource} for details.
             */
            constructor();

        }

        /**
         * AWSDKModality class represents a modality object with all necessary information to describe a modality.
         */
        class AWSDKModality extends AWSDKDataObject {
            /**
             * AWSDKModality class represents a modality object with all necessary information to describe a modality.
             */
            constructor();

            /**
             * The name of the modality.
             */
            name: string;

            /**
             * The localized display name of the modality.
             */
            localizedDisplayName: string;

            /**
             * The type of this modality.
             */
            modalityType: AWSDKVisitModalityType;

        }

        /**
         * AWSDKNamedEntity class represents a known {@link AWSDKEntity} that has a name.
         */
        class AWSDKNamedEntity extends AWSDKEntity {
            /**
             * AWSDKNamedEntity class represents a known {@link AWSDKEntity} that has a name.
             */
            constructor();

            /**
             * The name associated with this object.
             */
            name: string;

            /**
             * The first name associated with this object
             */
            firstName: string;

            /**
             * The middle initial associated with this object
             */
            middleInitial: string;

            /**
             * The last name associated with this object
             */
            lastName: string;

        }

        /**
         * This class represents a platform type that an instance of an AWSDK in running on.
         */
        class AWSDKPlatformType extends AWSDKDataObject {
            /**
             * This class represents a platform type that an instance of an AWSDK in running on.
             */
            constructor();

            /**
             * The string representing the name of the platform.
             */
            name: string;

            /**
             * The string representing the localized name for the platform.
             */
            localizedDisplayName: string;

        }

        /**
         * The AWSDKPracticeSearchType class represents a practice search type that can be used to filter a list of providers based on their practice type.
         * @since TODO
         */
        class AWSDKPracticeSearchType extends AWSDKDataObject {
            /**
             * The localized label for this search type
             */
            label: string;
            /**
             * The non-localized actual value of this type
             */
            type: string
        }

        /**
         * The AWSDKResource class is supposed to represent a resource that needs to be displayed in i18n scenarios.
         */
        class AWSDKResource extends AWSDKDataObject {
            /**
             * The AWSDKResource class is supposed to represent a resource that needs to be displayed in i18n scenarios.
             */
            constructor();

            /**
             * The key for this resource.
             */
            resourceKey: string;

            /**
             * The String value for this resource.
             */
            value: string;

        }

        /**
         * Enum for defining sort order.
         */
        enum AWSDKSortOrder {
            /**
             * Defines an ascending sort order.
             */
          ASC = 'asc',
            /**
             * Defines a descending sort order.
             */
          DESC = 'desc',
        }

        /**
         * AWSDKstate class contains all the necessary information to correctly describe a given state and other state relevant information.
         */
        class AWSDKState extends AWSDKEntity {
            /**
             * AWSDKstate class contains all the necessary information to correctly describe a given state and other state relevant information.
             */
            constructor();

            /**
             * The state code.
             */
            code: string;

            /**
             * The state name.
             */
            name: string;

            /**
             * The country code.
             */
            countryCode: string;

            /**
             * The country name.
             */
            countryName: string;

            /**
             * The rx service options.
             */
            rxServiceState: string;

            /**
             * If the state can be used to set set legal residence.
             */
            legalResidence: boolean;

            /**
             * If the state can be used on an address.
             */
            legalAddress: boolean;

        }

        /**
         * This class represents a systemConfiguration object with all the flags supported by that configuration.
         */
        class AWSDKSystemConfiguration extends AWSDKDataObject {
            /**
             * This class represents a systemConfiguration object with all the flags supported by that configuration.
             */
            constructor();

            /**
             * Returns the configured {@link AWSDKConsumerMiddleNameHandling}.
             */
            consumerMiddleNameHandling: AWSDKConsumerMiddleNameHandling;

            /**
             * TRUE if the server requires the consumer address.
             */
            consumerAddressRequired: boolean;

            /**
             * TRUE if the server requires the collection of consumer health insurance info.
             */
            consumerHealthInsuranceCollected: boolean;

            /**
             * The login age restriction.
             */
            loginAgeRestriction: number;

            /**
             * TRUE if the server allows collection of service key information.
             */
            serviceKeyCollected: boolean;

            /**
             * The maximum allowed size of an attachment for a secure message in KB.
             */
            secureMessageAttachmentMaxSizeKB: number;

            /**
             * A list of file extensions that will be rejected by the server.
             * Note: it's recommended to use {@link #getMimeTypeWhiteList()} to determine which
             * file types are allowed by the server.
             */
            attachmentExtensionRejectList: string;

            /**
             * Number of MS representing margin around a
             * {@link VisitSchedule#getScheduledStartTime()}.
             */
            scheduledVisitMarginMs: number;

            /**
             * TRUE if the system is configured to allow multiple guests to join a video visit.
             */
            multipleVideoParticipantsEnabled: boolean;

            /**
             * The number of maximum guests the consumer can invite to a video visit if {@link.
             * #multipleVideoParticipantsEnabled()} = TRUE
             */
            maxVideoInvites: number;

            /**
             * TRUE if the app should prompt for provider rating for visit summary.
             */
            showProviderRating: boolean;

            /**
             * TRUE if collection of ratings after a visit is optional.
             */
            endVisitRatingsOptional: boolean;

            /**
             * List of locale string identifiers supported by the server.
             */
            supportedLocales: string[];

            /**
             * The users currency code provided by the server.
             */
            currencyCode: string;

            /**
             * List of mimeTypes that are supported as attachments.
             */
            mimeTypeWhitelist: string[];

            /**
             * TRUE if the other visit topic option is available. false otherwise.
             */
            otherTopicEnabled: boolean;

            /**
             * TRUE if the multi-country is enabled on the server.
             */
            isMultiCountry: boolean;

            /**
             * TRUE if users should be able to cancel appointments and false if the user should not.
             */
            cancelAppointmentEnabled: boolean;

            /**
             * Optional text to be displayed if canceling appointments is disabled as returned by
             * {@link #isCancelAppointmentEnabled}.
             */
            optionalCancelAppointmentText: string;

            /**
             * TRUE if Appointment Readiness has been enabled on the server. False otherwise.
             */
            appointmentReadinessEnabled: boolean;

            /**
             * The url to download the Telehealth Video for Windows.
             */
            telehealthVideoInstallUrlForWindows: string;

            /**
             * The url to download the Telehealth Video for Mac.
             */
            telehealthVideoInstallUrlForMac: string;

            /**
             * The URI to start the Telehealth Video in test mode on Windows.
             */
            telehealthVideoTestUriForWindows: string;

            /**
             * The URI to start the Telehealth Video in test mode on Mac.
             */
            telehealthVideoTestUriForMac: string;

            /**
             * The list of {@link AWSDKReminderOption}.
             */
            reminderOptions: AWSDKReminderOption[];

            /**
             * The list of protected field names.
             */
            protectedFieldNames: string[];

            /**
             * The password invalid characters message string.
             */
            passwordContainsInvalidCharactersMessage: string;

            /**
             * Boolean of if the password must contain letters.
             */
            passwordMustContainLetters: boolean;

            /**
             * The password must contain letters message string.
             */
            passwordRequiresLettersMessage: string;

            /**
             * Returns a boolean of if the password must contain numbers.
             */
            passwordMustContainNumbers: boolean;

            /**
             * The password must contain numbers message string.
             */
            passwordRequiresNumbersMessage: string;

            /**
             * The number of special characters required.
             */
            minimumNumberOfSpecialCharactersInPassword: number;

            /**
             * Boolean of if a password must contain special characters.
             */
            passwordMustContainSpecialCharacters: boolean;

            /**
             * A string of a list of special characters allowed in a password.
             */
            specialCharacterSetAllowedInPassword: string;

            /**
             * The password must contain special characters message string.
             */
            passwordRequiresSpecialCharactersMessage: string;

            /**
             * The password reset expiration time.
             */
            passwordResetExpirationTime: number;

            /**
             * The minimum length for a password.
             */
            minPasswordLength: number;

            /**
             * The maximum length for a password.
             */
            maxPasswordLength: number;

            /**
             * The password too long message string.
             */
            passwordTooLongMessage: string;

            /**
             * The password too short message string.
             */
            passwordTooShortMessage: string;

            /**
             * The password regular expression validation string.
             */
            passwordRegularExpression: string;

            /**
             * TRUE if speedPass is enabled.
             */
            speedPassActive: boolean;

            /**
             * TRUE if electronicFaxEnabled is enabled.
             */
            electronicFaxEnabled: boolean;

            /**
             * TRUE if option to send visit summary is to be shown, FALSE otherwise.
             */
            showOptionToSendVisitSummary: boolean;

            /**
             * TRUE if the telehealth platform supports gender identity feature.
             */
            genderSupportEnabled: boolean;

            /**
             * An Array of {@link AWSDKGenderIdentity} representing the supported genderIdentities on the platform.
             */
            genderIdentities: AWSDKGenderIdentity[];

            /**
             * TRUE if the chat tab should be hidden during the visit.
             */
            alwaysHideChatTabEnabled: boolean;

            /**
             * TRUE if the notes tab should be hidden during the visit.
             */
            alwaysHideNotesTabEnabled: boolean;

            /**
             * The customer support phone number for the platform.
             */
            formattedCustomerSupportPhone: string;

        }

        /**
         * This class expands on the concept of gender to make it more inclusive to modern gender identifications.
         */
        class AWSDKGenderIdentity extends AWSDKDataObject {
            /**
             * The string that uniquely identifies this gender identity.
             */
            key: string;

            /**
             * The string representing the localized display name for the gender identity.
             */
            genderText: string;

            /**
             * The object representing a mapping of additional locales to genderText.
             */
            genderTexts: any;
        }

        /**
         * This class represents the different topic types available for a secure message.
         */
        class AWSDKTopicType extends AWSDKDataObject {
            /**
             * This class represents the different topic types available for a secure message.
             */
            constructor();

            /**
             * The name of the topic type.
             */
            name: string;

            /**
             * The unique key of the topic type.
             */
            key: string;

        }

        /**
         * AWSDKCreditCardType class represents a credit card type (Amex, Visa, Mastercard, etc) used for payment. It encapsulates information about a type of credit card
         * that can be used to validate the credit card client side.
         */
        class AWSDKCreditCardType extends AWSDKDataObject {
            /**
             * AWSDKCreditCardType class represents a credit card type (Amex, Visa, Mastercard, etc) used for payment. It encapsulates information about a type of credit card
             * that can be used to validate the credit card client side.
             */
            constructor();

            /**
             * The name of the credit card type.
             */
            name: string;

            /**
             * The type of credit card. A case-insensitive form of the name property.
             */
            type: string;

            /**
             * The length of the cvv code.
             */
            cvvLength: string;

            /**
             * The regex to validate the credit card number for this type.
             */
            regex: string;

        }

        /**
         * This class represents the current stored payment information (credit card) for a given {@link AWSDKConsumer}.
         */
        class AWSDKPaymentMethod extends AWSDKEntity {
            /**
             * This class represents the current stored payment information (credit card) for a given {@link AWSDKConsumer}.
             */
            constructor();

            /**
             * The billing name associated with this payment method.
             */
            billingName: string;

            /**
             * The billing address associated with this payment method.
             */
            billingAddress: AWSDKAddress;

            /**
             * The type of credit card (Visa, Mastercard, Amex)
             */
            type: string;

            /**
             * The last 4 digits of the currently stored credit card.
             */
            lastDigits: string;

            /**
             * Boolean TRUE if this payment method is expired, false otherwise.
             */
            isExpired: boolean;

        }

        /**
         * This class represents a placeholder for payment (credit card) information for updating a consumer's payment method on file.
         */
        class AWSDKPaymentRequest extends AWSDKDataObject {
            /**
             * This class represents a placeholder for payment (credit card) information for updating a consumer's payment method on file.
             */
            constructor();

            /**
             * The name of the credit card holder. This is the {@link AWSDKConsumer} whose payment information we are updating.
             */
            nameOnCard: string;

            /**
             * The (new) credit card number.
             */
            creditCardNumber: string;

            /**
             * The zip (postal) code associated with the credit card.
             */
            creditCardZip: string;

            /**
             * The security code of the credit card.
             */
            creditCardSecCode: string;

            /**
             * The street address associated with this {@link AWSDKConsumer}'s credit card account.
             */
            address1: string;

            /**
             * Additional address information associated with the {@link AWSDKConsumer} credit card account.
             */
            address2: string;

            /**
             * The city name associated with the {@link AWSDKConsumer}'s credit card account.
             */
            city: string;

            /**
             * The state name associated with the {@link AWSDKConsumer}'s credit card account.
             */
            state: string;

            /**
             * The country name associated with the {@link AWSDKConsumer}'s credit card account.
             */
            country: string;

            /**
             * The expiration month for this credit card.
             */
            creditCardMonth: number;

            /**
             * The expiration year for this credit card.
             */
            creditCardYear: number;

        }

        class AWSDKChatItem extends AWSDKDataObject {
            constructor();

            /**
             * The chat message text.
             */
            message: string;

            /**
             * The date and time the message was originally sent.
             */
            date: Date;

            /**
             * Boolean TRUE if the current consumer sent the message, false otherwise.
             */
            isSelf: boolean;

            /**
             * The first name of the person who sent the message.
             */
            firstName: string;

            /**
             * The last name of the person who sent the message.
             */
            lastName: string;

            /**
             * The full name of the person who sent the message.
             */
            fullName: string;

            /**
             * A number representing the position of this message in relation to other messages.
             */
            ordinal: number;

            /**
             * The message type.
             */
            messageType: string;

            /**
             * The gender of the person who sent the message.
             */
            gender: AWSDKGender;

            /**
             * The localized gender of the person who sent the message.
             */
            localizedGender: string;

            /**
             * The type of the user who created the chat item.
             */
            userType: AWSDKUserType;

        }

        /**
         * This class encapsulates information about a chat session between a consumer and a provider.
         */
        class AWSDKChatReport extends AWSDKDataObject {
            /**
             * This class encapsulates information about a chat session between a consumer and a provider.
             */
            constructor();

            /**
             * An array of {@link AWSDKChatItem} associated with the visit
             */
            chatItems: AWSDKChatItem[];

            /**
             * Represents the last ordinal found in this report
             */
            lastOrdinal: number;

        }

        /**
         * AWSDKBaseConsumerUpdate represents a base interface for {@link AWSDKConsumer} and Dependent update and registration data.
         * See {@link AWSDKConsumerRegistration} for usage.
         */
        class AWSDKBaseConsumerUpdate extends AWSDKEntity {
            /**
             * AWSDKBaseConsumerUpdate represents a base interface for {@link AWSDKConsumer} and Dependent update and registration data.
             * See {@link AWSDKConsumerRegistration} for usage.
             */
            constructor();

            /**
             * The consumer's first name.
             */
            firstName: string;

            /**
             * The consumer's middle initial.
             */
            middleInitial: string;

            /**
             * The consumer's middle name.
             */
            middleName: string;

            /**
             * The consumer's last name.
             */
            lastName: string;

            /**
             * The consumer's date of birth.
             */
            dob: Date;

            /**
             * The consumer's gender.
             */
            gender: string;

            /**
             * The sdkUserId which associates an external ID with this consumer and the SDK configuration in use.
             */
            sdkUserId: string;

            /**
             * The consumer's source ID.
             */
            sourceId: string;

            /**
             * A string representing the genderIdentityKey.
             */
            genderIdentityKey: string;

        }

        /**
         * The AWSDKConsumer class represents a Consumer object.
         * This class represents both a consumerInfo and a consumerDetails, since the difference between the two is minimal and we, for the most part, only care about consumer details.
         * Please note that the consumer object returned with an authentication call lacks certain fields: most notably the dependents field.
         */
        class AWSDKConsumer extends AWSDKEntity {
            /**
             * The AWSDKConsumer class represents a Consumer object.
             * This class represents both a consumerInfo and a consumerDetails, since the difference between the two is minimal and we, for the most part, only care about consumer details.
             * Please note that the consumer object returned with an authentication call lacks certain fields: most notably the dependents field.
             */
            constructor();

            /**
             * The consumer's address.
             */
            address: AWSDKAddress;

            /**
             * The consumer's health plan subscription.
             */
            subscription: AWSDKSubscription;

            /**
             * The consumer's legal residence.
             */
            legalResidence: AWSDKState;

            /**
             * The consumer's preferred locale.
             */
            preferredLocale: string;

            /**
             * The consumer's date of birth.
             */
            dob: Date;

            /**
             * The consumer's age.
             */
            age: string;

            /**
             * The consumer's email address.
             */
            email: string;

            /**
             * The consumer's first name.
             */
            firstName: string;

            /**
             * The consumer's middle name.
             */
            middleName: string;

            /**
             * The consumer's last name.
             */
            lastName: string;

            /**
             * The consumer's middle initial.
             */
            middleInitial: string;

            /**
             * The consumer's full name (first, middle and last).
             */
            fullName: string;

            /**
             * Boolean TRUE if the consumer is registered, false otherwise.
             */
            registered: boolean;

            /**
             * The consumer's gender.
             */
            gender: string;

            /**
             * The consumer's localized gender.
             */
            localizedGender: string;

            /**
             * The consumer's phone number.
             */
            phone: string;

            /**
             * The formatted consumer's phone number.
             */
            formattedPhone: string;

            /**
             * The type of consumer.
             */
            memberType: string;

            /**
             * Boolean TRUE if appointment reminder texts are enabled, false otherwise.
             */
            appointmentReminderTextsEnabled: boolean;

            /**
             * The consumer's pin.
             */
            pin: string;

            /**
             * The type of feed that added this Consumer to storage.
             */
            feedType: string;

            /**
             * The consumer's {@link AWSDKGender}.
             */
            genderEnum: AWSDKGender;

            /**
             * The link to this Consumer's details.
             */
            href: string;

            /**
             * Any formulary restrictions this provider might have.
             */
            formularyRestriction: string;

            /**
             * The patient's medical record number id.
             */
            patientMrnId: string;

            /**
             * The dependents associated to this consumer.
             */
            dependents: AWSDKConsumer[];

            /**
             * The last time this consumer logged in.
             */
            lastLogin: number;

            /**
             * Boolean TRUE if the Consumer is eligible for a visit.
             */
            eligibleForVisit: boolean;

            /**
             * If this is a dependent then this property will reference the parent {@link AWSDKConsumer|Consumer} object, null otherwise.
             */
            parent: AWSDKConsumer;

            /**
             * An ID for the consumer that can be used to associate this account with an account in an external system.
             */
            sourceId: string;

            /**
             * The legal guardians for this Consumer. If a dependent this will be the parents/legal guardians, otherwise it will be an empty array.
             */
            proxies: AWSDKConsumer[];

            /**
             * Returns a boolean that specifies whether or not this consumer is a dependent.
             */
            isDependent: boolean;

            /**
             * The canonical time zone for this consumer. Example: America/New_York.
             */
            timeZone: string;

            /**
             * The sdkUserId which associates an external ID with this consumer and the SDK configuration in use.
             */
            sdkUserId: string;

        }

        /**
         * Enum for AWSDKConsumerMiddleNameHandling.
         */
        enum AWSDKConsumerMiddleNameHandling {
            /**
             * The consumer's full middle name is supported.
             */
          FULLNAME = 'FULLNAME',
            /**
             * The consumer's middle initial is supported.
             */
          INITIAL = 'INITIAL',
            /**
             * Neither full middle name or middle initial is supported.
             */
          NONE = 'NONE',
        }

        /**
         * The AWSDKConsumerOverrideDetails class encapsulates any consumer specific details to be used with cart-based visits.
         */
        class AWSDKConsumerOverrideDetails {
            /**
             * The AWSDKConsumerOverrideDetails class encapsulates any consumer specific details to be used with cart-based visits.
             */
            constructor();

            /**
             * The consumer's medical record number id.
             */
            mrnId: string;

            /**
             * The consumer's first name.
             */
            firstName: string;

            /**
             * The consumer's last name.
             */
            lastName: string;

            /**
             * The consumer's middle name or initial.
             */
            middleNameOrInitial: string;

            /**
             * The consumer's gender.
             */
            gender: AWSDKGender;

            /**
             * The consumer's email.
             */
            email: string;

            /**
             * The consumer's date of birth.
             */
            dob: Date;

            /**
             * The consumer's first address line.
             */
            address1: string;

            /**
             * The consumer's second address line.
             */
            address2: string;

            /**
             * The consumer's city.
             */
            city: string;

            /**
             * The consumer's state.
             */
            state: AWSDKState;

            /**
             * The consumer's zip code.
             */
            zipCode: string;

            /**
             * The consumer's phone number.
             */
            phone: string;

        }

        /**
         * AWSDKConsumerUpdate represents a data container for collecting data to update a {@link AWSDKConsumer}.
         */
        class AWSDKConsumerUpdate extends AWSDKBaseConsumerUpdate {
            /**
             * AWSDKConsumerUpdate represents a data container for collecting data to update a {@link AWSDKConsumer}.
             */
            constructor();

            /**
             * The Consumer's email address.
             */
            email: string;

            /**
             * The consumer's password.
             */
            password: string;

            /**
             * The consumer's current legal residence state code.
             */
            legalResidence: string;

            /**
             * The consumer's current legal residence country code.
             */
            legalResidenceCountryCode: string;

            /**
             * The consumer's preferred locale.
             */
            preferredLocale: string;

            /**
             * The consumer's phone number.
             */
            phone: string;

            /**
             * The consumer's medical record number id.
             */
            patientMrnId: string;

            /**
             * The auth key pertaining to this consumer.
             */
            consumerAuthKey: string;

            /**
             * The consumer's street name or P.O box.
             */
            address1: string;

            /**
             * The consumer's apartment, suite, or any other extra identifying field for address.
             */
            address2: string;

            /**
             * The city where the consumer's address is located.
             */
            city: string;

            /**
             * The consumer's zip/postal code.
             */
            zipCode: string;

            /**
             * The consumer's state code. example: MA.
             */
            stateCode: string;

            /**
             * The consumer's country code.
             */
            countryCode: string;

            /**
             * Boolean TRUE if the consumer has appointment reminder texts enabled, false otherwise.
             */
            isAppointmentReminderTextsEnabled: boolean;

            /**
             * The consumer's canonical time zone. Example: America/New_York.
             */
            timeZone: string;

        }

        /**
         * This class represents the dependent access request object.
         */
        class AWSDKDependentAccessRequest extends AWSDKEntity {
            /**
             * This class represents the dependent access request object.
             */
            constructor();

            /**
             * The list of dependents associated with the guardian to whom this request was made.
             */
            dependents: AWSDKConsumer[];

            /**
             * The legal guardian of the dependent for whom this request was made.
             */
            guardian: AWSDKConsumer;

            /**
             * The consumer who is asking access to a dependent.
             */
            requestor: AWSDKConsumer;

        }

        /**
         * AWSDKDependentUpdate represents a data container for collecting data to update a dependent {@link AWSDKConsumer}.
         * See {@link AWSDKBaseConsumerUpdate} for details.
         */
        class AWSDKDependentUpdate extends AWSDKBaseConsumerUpdate {
            /**
             * AWSDKDependentUpdate represents a data container for collecting data to update a dependent {@link AWSDKConsumer}.
             * See {@link AWSDKBaseConsumerUpdate} for details.
             */
            constructor();

        }

        /**
         * Enum for AWSDKGender.
         */
        enum AWSDKGender {
            /**
             * The FEMALE gender of a consumer.
             */
          FEMALE = 'FEMALE',
            /**
             * The MALE gender of a consumer.
             */
          MALE = 'MALE',
        }

        /**
         * The AWSDKHealthSummary class represents a summary of previously gathered health information records for a {@link AWSDKConsumer}.
         */
        class AWSDKHealthSummary extends AWSDKDataObject {
            /**
             * The AWSDKHealthSummary class represents a summary of previously gathered health information records for a {@link AWSDKConsumer}.
             */
            constructor();

            /**
             * An array of {@link AWSDKHealthSummaryRecord} objects for allergies.
             */
            allergies: AWSDKHealthSummaryRecord[];

            /**
             * An array of {@link AWSDKHealthSummaryRecord} objects for diagnoses.
             */
            diagnoses: AWSDKHealthSummaryRecord[];

            /**
             * An array of {@link AWSDKHealthSummaryRecord} objects for procedures.
             */
            procedures: AWSDKHealthSummaryRecord[];

            /**
             * An array of {@link AWSDKHealthSummaryPrescriptionRecord} objects for prescriptions.
             */
            prescriptions: AWSDKHealthSummaryPrescriptionRecord[];

        }

        /**
         * This class represents the device integration request object.
         * Get an instance of this class by calling {@see ConsumerService#getNewDeviceIntegrationRequest|ConsumerService.getNewDeviceIntegrationRequest}.
         */
        class AWSDKDeviceIntegrationRequest {
            /**
             * This class represents the device integration request object.
             * Get an instance of this class by calling {@see ConsumerService#getNewDeviceIntegrationRequest|ConsumerService.getNewDeviceIntegrationRequest}.
             */
            constructor();

            /**
             * The list of exam data entries associated with the device integration request.
             */
            examDataEntries: AWSDKExamDataRequest[];

            /**
             * The optional visit associated with this device integration request.
             */
            visit: AWSDKVisit;

        }

        /**
         * This class contains all necessary information for representing an exam's data request.
         */
        class AWSDKExamDataRequest {
            /**
             * This class contains all necessary information for representing an exam's data request.
             */
            constructor();

            /**
             * The exam data Id.
             */
            id: string;

            /**
             * The exam data type.
             */
            type: string;

            /**
             * The exam date and time.
             */
            dateTime: Date;

            /**
             * This method is a convenience method for presenting this object as an array element within a JSON string.
             */
            __toRequestElement(): Object;

        }

        /**
         * This class represents allergy information for intake and Consumer update.
         */
        class AWSDKAllergy extends AWSDKConsumerHealthItem {
            /**
             * This class represents allergy information for intake and Consumer update.
             */
            constructor();

            /**
             * The name of the allergy.
             */
            name: string;

        }

        /**
         * Represents a medical condition that can be added or removed from a consumer's health record.
         */
        class AWSDKCondition extends AWSDKConsumerHealthItem {
            /**
             * Represents a medical condition that can be added or removed from a consumer's health record.
             */
            constructor();

            /**
             * The term ID of the condition.
             */
            termId: number;

            /**
             * The name of the condition.
             */
            displayName: string;
        }

        /**
         * This class represents the base class for selectable health items.
         */
        class AWSDKConsumerHealthItem extends AWSDKDataObject {
            /**
             * This class represents the base class for selectable health items.
             * @param isCurrent boolean TRUE if the item is current, false otherwise.
             */
            constructor(isCurrent: boolean);

            /**
             * Whether or not the health item is currently exhibited.
             */
            isCurrent: boolean;

        }

        /**
         * This class contains all the meta-data needed to download the health document which it represents, including mime-type, size, link and name.
         */
        class AWSDKHealthDocumentAttachment extends AWSDKEntity {
            /**
             * This class contains all the meta-data needed to download the health document which it represents, including mime-type, size, link and name.
             */
            constructor();

            /**
             * The name of this attachment.
             */
            name: string;

            /**
             * The size of the document in kilobytes.
             */
            size: number;

            /**
             * The Mime-Type associated with this document.
             */
            type: string;

        }

        /**
         * This class represents a single instance of a {@link AWSDKConsumer}'s health record document. It is not
         * the actual file, but instead an object with meta-data about the actual file.
         */
        class AWSDKHealthDocumentRecord extends AWSDKEntity {
            /**
             * This class represents a single instance of a {@link AWSDKConsumer}'s health record document. It is not
             * The actual file, but instead an object with meta-data about the actual file.
             */
            constructor();

            /**
             * The name of this record.
             */
            name: string;

            /**
             * The textual description of this health record.
             */
            description: string;

            /**
             * The string url that points to this health record.
             */
            href: string;

            /**
             * Contains information about the file and provides link for downloading.
             */
            attachment: AWSDKHealthDocumentAttachment;

            /**
             * The sourceId associated with this health document.
             */
            sourceId: string;

            /**
             * The date that this health document was uploaded.
             */
            uploadDate: Date;

        }

        /**
         * This class is a wrapper around a collection (Array) of objects of type {@link AWSDKHealthDocumentRecord}.
         */
        class AWSDKHealthDocumentRecordList extends AWSDKDataObject {
            /**
             * This class is a wrapper around a collection (Array) of objects of type {@link AWSDKHealthDocumentRecord}.
             */
            constructor();

            /**
             * An Array of {@link AWSDKHealthDocumentRecord} objects.
             */
            documentRecords: AWSDKHealthDocumentRecord[];

        }

        /**
         * The AWSDKHealthSummaryRecord class represents entries in the health summary.
         */
        class AWSDKHealthSummaryRecord extends AWSDKDataObject {
            /**
             * The AWSDKHealthSummaryRecord class represents entries in the health summary.
             */
            constructor();

            /**
             * The code of the item of record.
             */
            code: string;

            /**
             * The description of the item of record.
             */
            description: string;

            /**
             * The first occurrence of the record.
             */
            firstOccurance: Date;

            /**
             * The last occurrence of the record.
             */
            lastOccurance: Date;

            /**
             * If the record was reported by the consumer.
             */
            selfReported: boolean;

        }

        /**
         * The AWSDKHealthSummaryPrescriptionRecord class represents entries in the health summary prescriptions.
         */
        class AWSDKHealthSummaryPrescriptionRecord extends AWSDKHealthSummaryRecord {
            /**
             * The AWSDKHealthSummaryPrescriptionRecord class represents entries in the health summary prescriptions.
             */
            constructor();
            /**
             * boolean true if prescription is to be dispensed as written
             */
            isDispenseAsWritten: boolean;

            /**
             * boolean true if prescription as needed
             */
            isAsNeeded: boolean;

            /**
             * boolean true if the prescription is to be stoped when directed
             */
            isStopWhenDirected: boolean;

            /**
             * the dosage of the prescription
             */
            dosage: string;

            /**
             * the duration of the prescription
             */
            duration: string;

            /**
             * the frequency of the prescription
             */
            frequency: string;

            /**
             * the instructions for the prescription
             */
            instructions: string;

            /**
             * the quantity of the prescription
             */
            quantity: number;

            /**
             * the total number of refills for the prescription
             */
            refillTotal: number;

            /**
             * the measurement unit qualifier
             */
            measurementUnitQualifier: string;
        }

        /**
         * Represents the particular vitals measurements of a {@link AWSDKConsumer}
         */
        class AWSDKVitals extends AWSDKDataObject {
            /**
             * Represents the particular vitals measurements of a {@link AWSDKConsumer}.
             */
            constructor();

            /**
             * The patient's reported systolic value.
             */
            systolic: number;

            /**
             * The patient's systolic value.
             */
            diastolic: number;

            /**
             * The patient's temperature.
             */
            temperature: number;

            /**
             * The patient's weight.
             */
            weight: number;

        }

        /**
         * The AWSDKEligibilityCheck represents an eligibility check object.
         */
        class AWSDKEligibilityCheck extends AWSDKEntity {
            /**
             * The AWSDKEligibilityCheck represents an eligibility check object.
             */
            constructor();

            /**
             * The id of the request.
             */
            eligibilityRequestId: string;

            /**
             * Whether or not the check was required.
             */
            eligibilityCheckRequired: string;

            /**
             * Whether or not the check was completed.
             */
            eligibilityCheckCompleted: string;

            /**
             * Error associated with the check.
             */
            eligibilityError: string;

        }

        /**
         * AWSDKHealthPlan class represents a health plan object, which encapsulates information about a health plan.
         */
        class AWSDKHealthPlan extends AWSDKEntity {
            /**
             * AWSDKHealthPlan class represents a health plan object, which encapsulates information about a health plan.
             */
            constructor();

            /**
             * The health plan name.
             */
            name: string;

            /**
             * The health plan qualifier.
             */
            qualifier: string;

            /**
             * Returns TRUE if the health plan uses suffixes.
             */
            usesSuffix: boolean;

            /**
             * Returns TRUE if the health plan is feed controlled.
             */
            feedControlled: boolean;

            /**
             * information about the payer.
             */
            payerInfo: AWSDKPayerInfo;

        }

        /**
         * AWSDKPayerInfo class represents a payer information object encapsulating the information about a payer in a health plan.
         */
        class AWSDKPayerInfo extends AWSDKDataObject {
            /**
             * The subscriber id pattern for this health plan.
             */
            subscriberIdPattern: string;

            /**
             * The error message to show if the subscriber id does not match the pattern.
             */
            subscriberIdPatternErrorMessage: string;

            /**
             * Returns TRUE if the health plan is configured to suppress payment when a timeout occurs during an eligibility check.
             */
            isSuppressCharge: boolean;

            /**
             * Returns TRUE if the primary subscriber question should be displayed.
             */
            showPrimarySubscriberQuestion: boolean;

        }

        /**
         * AWSDKRelationshipToSubscriberCode class represents a relationship object between an person covered by a health plan insurance and the policy owner.
         */
        class AWSDKRelationshipToSubscriberCode extends AWSDKDataObject {
            /**
             * AWSDKRelationshipToSubscriberCode class represents a relationship object between an person covered by a health plan insurance and the policy owner.
             */
            constructor();

            /**
             * The display name for the relationship code.
             */
            displayName: string;

            /**
             * The localized display name for the relationship code.
             */
            localizedDisplayName: string;

            /**
             * The internal numeric value used to represent the relationship code.
             */
            warehouseValue: number;

            /**
             * is the relationship code valid for minor's.
             */
            isValidForMinorAccount: boolean;

        }

        /**
         * AWSDKSubscription class represents the subscription object pertaining to a given health plan insurance.
         */
        class AWSDKSubscription extends AWSDKEntity {
            /**
             * AWSDKSubscription class represents the subscription object pertaining to a given health plan insurance.
             */
            constructor();

            /**
             * The health plan.
             */
            healthPlan: AWSDKHealthPlan;

            /**
             * The health insurance subscriber id.
             */
            subscriberId: string;

            /**
             * The health insurance subscriber suffix.
             */
            subscriberSuffix: string;

            /**
             * The health insurance start date.
             */
            startDate: Date;

            /**
             * The health insurance end date.
             */
            endDate: Date;

            /**
             * What is relationship with the primary subscriber.
             */
            relationshipToSubscriberCode: AWSDKRelationshipToSubscriberCode;

            /**
             * The primary subscriber's first name.
             */
            primarySubscriberFirstName: string;

            /**
             * The primary subscriber's last name.
             */
            primarySubscriberLastName: string;

            /**
             * The primary subscriber's date of birth.
             */
            primarySubscriberDateOfBirth: Date;

        }

        /**
         * AWSDKSubscriptionUpdate class represents the subscription update object pertaining to a given health plan insurance.
         */
        class AWSDKSubscriptionUpdate extends AWSDKDataObject {
            /**
             * AWSDKSubscriptionUpdate class represents the subscription update object pertaining to a given health plan insurance.
             */
            constructor();

            /**
             * The health plan.
             */
            healthPlan: AWSDKHealthPlan;

            /**
             * The health insurance subscriber id.
             */
            subscriberId: string;

            /**
             * The health insurance subscriber suffix.
             */
            subscriberSuffix: string;

            /**
             * What is relationship with the primary subscriber.
             */
            relationshipToSubscriberCode: AWSDKRelationshipToSubscriberCode;

            /**
             * The primary subscriber's first name.
             */
            primarySubscriberFirstName: string;

            /**
             * The primary subscriber's last name.
             */
            primarySubscriberLastName: string;

            /**
             * The primary subscriber's date of birth.
             */
            primarySubscriberDateOfBirth: Date;

            /**
             * The requestId of the eligibility check.
             */
            eligibilityRequestId: string;

            /**
             * Set this to FALSE unless you have EDI enabled and want to ignore it to force saving of data.
             */
            ignoreEligibilityChecks: boolean;

        }

        /**
         * This class represents a single medication for a {@link AWSDKConsumer}.
         */
        class AWSDKMedication extends AWSDKEntity {
            /**
             * This class represents a single medication for a {@link AWSDKConsumer}.
             */
            constructor();

            /**
             * The code that identifies this medication.
             */
            code: string;

            /**
             * Information pertaining to this medication.
             */
            description: string;

            /**
             * The name to be displayed for this medication.
             */
            displayName: string;

        }

        /**
         * This a wrapper class around a collection of {@link AWSDKMedication}.
         */
        class AWSDKMedicationList extends AWSDKDataObject {
            /**
             * This a wrapper class around a collection of {@link AWSDKMedication}.
             */
            constructor();

            /**
             * A collection (Array) of {@link AWSDKMedication} for the consumer.
             */
            medications: AWSDKMedication[];

        }

        /**
         * This class represents a notifications object for a {@link AWSDKConsumer} obtained from an {@link AWSDKNotificationsResponse}.
         */
        class AWSDKNotifications extends AWSDKDataObject {
            /**
             * This class represents a notifications object for a {@link AWSDKConsumer} obtained from an {@link AWSDKNotificationsResponse}.
             */
            constructor();

            /**
             * The total number of secure messages in the inbox.
             */
            totalInboxCount: number;

            /**
             * The total number of unread secure messages in the consumer's inbox.
             */
            unreadInboxCount: number;

            /**
             * The total number of dependent access requests made to this consumer from another spouse.
             */
            dependentAccessRequestCount: number;

            /**
             * The total number of appointments for this consumer.
             */
            appointmentCount: number;

            /**
             * Boolean representing whether or not it is time for this consumer to start a visit.
             */
            isTimeForNextAppointment: boolean;

        }

        /**
         * This class contains all necessary information for representing a pharmacy.
         */
        class AWSDKPharmacy extends AWSDKEntity {
            /**
             * This class contains all necessary information for representing a pharmacy.
             */
            constructor();

            /**
             * The pharmacy type.
             */
            type: string;

            /**
             * The pharmacy's phone number.
             */
            phone: string;

            /**
             * The pharmacy's formatted phone number.
             */
            formattedPhone: string;

            /**
             * The pharmacy's fax number.
             */
            fax: string;

            /**
             * The pharmacy's formatted fax number.
             */
            formattedFax: string;

            /**
             * The pharmacy's email address.
             */
            email: string;

            /**
             * The pharmacy's street address.
             */
            address: AWSDKAddress;

            /**
             * Boolean TRUE if the pharmacy is available for selection.
             */
            isActive: boolean;

            /**
             * The longitude of the pharmacy's location.
             */
            longitude: number;

            /**
             * The latitude of the pharmacy's location.
             */
            latitude: number;

            /**
             * The name of the pharmacy.
             */
            name: string;

            /**
             * The distance in miles from the user's "Search-Near" location to this pharmacy. This property is only returned when
             * this object was returned through the {@link PharmacyService.getPharmaciesByLongitudeAndLatitude()}
             * function, and will be null otherwise.
             */
            distance: number;

        }

        /**
         * The AWSDKAvailabilityList class represents a wrapper object that encapsulates a response to a request for a list of date/times.
         */
        class AWSDKAvailabilityList extends AWSDKDataObject {
            /**
             * The AWSDKAvailabilityList class represents a wrapper object that encapsulates a response to a request for a list of date/times.
             */
            constructor();

            /**
             * An array of {@link Date}.
             */
            availability: Date[];

        }

        /**
         * Encapsulates information about a {@link AWSDKPractice}'s specialty applicable to on-demand visits.
         */
        class AWSDKOnDemandSpecialty extends AWSDKEntity {
            /**
             * Encapsulates information about a {@link AWSDKPractice}'s specialty applicable to on-demand visits.
             */
            constructor();

            /**
             * Whether the specialty collects {@link AWSDKCondition}s on intake intake.
             */
            intakeConditionsEnabled: boolean;

            /**
             * Whether the specialty collects {@link AWSDKAllergy}s on intake intake.
             */
            intakeAllergiesEnabled: boolean;

            /**
             * Whether the specialty collects {@link AWSDKMedication}s on intake.
             */
            intakeMedicationsEnabled: boolean;

            /**
             * Whether the specialty collects {@link AWSDKVital}s on intake.
             */
            intakeVitalsEnabled: boolean;

            /**
             * Whether the specialty has any providers available at the time of last update.
             */
            providersAvailable: boolean;

            /**
             * The provider types associated with this specialty.
             */
            providerTypes: AWSDKProviderType[];

        }

        abstract class AWSDKPracticeBase {

            /**
             * The name of the Practice.
             */
            name: string;

            /**
             * The type of practice that this Practice refers to.
             */
            practiceType: string;

            /**
             * TRUE if the insurance details should be shown to users of this practice, false otherwise.
             */
            acceptInsuranceEnabled: boolean;

            /**
             * True if this practice allows screen sharing, FALSE otherwise.
             * @since 3.1.0
             */
            screenSharingEnabled: boolean;
            
            /**
             * Represents the device mode. @since 2.9.0
             */
            deviceIntegrationMode: AWSDKDeviceIntegrationMode;

        }

        /**
         * The AWSDKPractice class representing a practice object.
         */
        class AWSDKPractice extends AWSDKPracticeBase {
            /**
             * The AWSDKPractice class representing a practice object.
             */
            constructor();

            /**
             * TRUE if the practice has a small logo, false otherwise.
             */
            hasSmallLogo: boolean;

            /**
             * TRUE if this practice has logo, false otherwise.
             */
            hasLogo: boolean;

            /**
             * The url to a more details for this practice.
             */
            href: string;

            /**
             * The address of the practice.
             */
            address: AWSDKAddress;

            /**
             * The practice's hours of operation.
             */
            hours: string;

            /**
             * The phone number associated with this practice.
             */
            phone: string;

            /**
             * The formatted phone number associated with this practice.
             */
            formattedPhone: string;

            /**
             * The String welcome message for this practice.
             */
            welcomeMessage: string;

            /**
             * The String representing the fax number for this practice.
             */
            fax: string;

            /**
             * TRUE if payment is required for scheduled visits, false otherwise.
             */
            paymentRequiredForScheduledVisits: boolean;

            /**
             * The String text associated with paymentRequiredForScheduledVisits.
             */
            paymentRequiredForScheduledVisitsText: string;

            /**
             * TRUE if the practice is available now, false otherwise.
             */
            showAvailableNow: boolean;

            /**
             * TRUE if this practice is scheduling, false otherwise.
             */
            showScheduling: boolean;

            /**
             * The url to the small practice logo.
             */
            smallLogoUrl: string;

            /**
             * The url to the practice logo.
             */
            logoUrl: string;

            /**
             * The id of the subcategory for this practice.
             */
            subCategoryId: AWSDKEntityId;

            /**
             * The list of subcategory ids this practice.
             */
            subCategoryIds: AWSDKEntityId[];

            /**
             * The id for this practice.
             */
            practiceId: AWSDKEntityId;

            /**
             * The specialty of this practice.
             */
            specialtyName: string;

            /**
             * The specialty color of this practice.
             */
            specialtyColor: string;

            /**
             * The subtitle of this practice.
             */
            subtitle: string;

            /**
             * The url to the practice card overlay image.
             */
            cardOverlayUrl: string;

            /**
             * The sourceId associated with this practice.
             */
            sourceId: string;

            /**
             * Tepresents the modalities that can be offered for a visit within this practice.
             */
            availableModalities: AWSDKModality[];

            /**
             * TRUE if the provider's estimated visit cost should be hidden for this practice.
             */
            hideProviderVisitCostEstimate: boolean;

            /**
             * TRUE if the practice is configured to hide the cancel appointment link.
             */
            hideCancelAppointmentLink: boolean;

            /**
             * TRUE if the practice has OnDemandSpecialties, false otherwise.
             */
            hasOnDemandSpecialties: boolean;

        }

        /**
         * The AWSDKPracticeCategory class represents a practice category object.
         */
        class AWSDKPracticeCategory extends AWSDKEntity {
            /**
             * The AWSDKPracticeCategory class represents a practice category object.
             */
            constructor();

            /**
             * The title of the practice category.
             */
            title: string;

            /**
             * An array of {@link AWSDKPracticeSubCategory}.
             */
            subCategories: AWSDKPracticeSubCategory[];

        }

        /**
         * This class represents the search criteria for finding a practice's future availability.
         * Get an instance of this via {@link PracticeService#getNewPracticeFutureAvailabilitySearchCriteria()|PracticeService.getNewPracticeFutureAvailabilitySearchCriteria}.
         */
        class AWSDKPracticeFutureAvailabilitySearchCriteria {
            /**
             * This class represents the search criteria for finding a practice's future availability.
             * Get an instance of this via {@link PracticeService#getNewPracticeFutureAvailabilitySearchCriteria()|PracticeService.getNewPracticeFutureAvailabilitySearchCriteria}.
             */
            constructor();

            /**
             * The canonical time zone name, i.e. America/New_York.
             */
            timeZone: string;

            /**
             * The {@link AWSDKPractice} or {@link AWSDKPracticeSubCategory} whose details we want to retrieve.
             */
            practiceOrSubCategory: AWSDKPractice | AWSDKPracticeSubCategory;

            /**
             * The text used to filter the available dates by provider names.
             */
            searchTerm: string;

            /**
             * The {@link AWSDKLanguage} spoken to filter the available dates on.
             */
            languageSpoken: AWSDKLanguage;

            /**
             * The appointment date to filter the available dates on.
             */
            appointmentDate: Date;

            /**
             * Limit the number of results returned. Should be an integer.
             */
            maxResults: number;

        }

        /**
         * The AWSDKPracticeInfo class represents a stub of a practice with no links, normally used for quick practice display.
         */
        class AWSDKPracticeInfo extends AWSDKPracticeBase {
            /**
             * The AWSDKPracticeInfo class represents a stub of a practice with no links, normally used for quick practice display.
             */
            constructor();

            /**
             * The text to be displayed when payment is required for a scheduled visit.
             */
            paymentRequiredForScheduledVisitsText: string;

            /**
             * Boolean TRUE if scheduled visits with this provider require payment, false otherwise.
             */
            paymentRequiredForScheduledVisits: boolean;

            /**
             * Boolean TRUE if the showAvailableNow flag is set, false otherwise.
             */
            showAvailableNow: boolean;

            /**
             * Boolean TRUE if the provider is accepting scheduled visits.
             */
            showScheduling: boolean;

            /**
             * Represents the modalities that can be offered for a visit within this practice @since 1.4.0.
             */
            availableModalities: AWSDKModality[];

            /**
             * TRUE if the provider's estimated visit cost should be hidden for this practice.
             */
            hideProviderVisitCostEstimate: boolean;

            /**
             * TRUE if the practice is configured to hide the cancel appointment link.
             */
            hideCancelAppointmentLink: boolean;

        }

        /**
         * The AWSDKPracticesResponse class represents a wrapper object that encapsulates a response to a request for a list of practices.
         */
        class AWSDKPracticeList extends AWSDKDataObject {
            /**
             * The AWSDKPracticesResponse class represents a wrapper object that encapsulates a response to a request for a list of practices.
             */
            constructor();

            /**
             * An array of {@link AWSDKPractice} objects.
             */
            practices: AWSDKPractice[];

            /**
             * An array of {@link AWSDKPracticeCategory} objects.
             */
            practiceCategories: AWSDKPracticeCategory[];

        }

        /**
         * This class represents the search criteria for finding a practice.
            Get an instance of this via {@link PracticeService#getNewPracticeSearchCriteria()|PracticeService.getNewPracticeSearchCriteria}
        */
        class AWSDKPracticeSearchCriteria {
            /**
             * This class represents the search criteria for finding a practice.
             * Get an instance of this via {@link PracticeService#getNewPracticeSearchCriteria()|PracticeService.getNewPracticeSearchCriteria}.
             */
            constructor();

            /**
             * The practice type to search for. Possible values are: DEFAULT, EXCLUSIVE, NORMAL.
             */
            practiceType: string;

            /**
             * The source Id to search for.
             */
            sourceId: string;

            /**
             * An AWSDKLanguage object which specifies the language.
             */
            language: AWSDKLanguage;

            /**
             * An AWSDKConsumer object which specifies the consumer.
             */
            consumer: AWSDKConsumer;

            /**
             * An integer which specifies the maximum number of results to return.
             */
            maxResults: number;

        }

        /**
         * This class represents the result of an authenticated or unauthenticated search for a practice by practiceType and/or language.
         */
        class AWSDKPracticeSearchResult extends AWSDKPracticeBase {
            /**
             * This class represents the result of an authenticated or unauthenticated search for a practice by practiceType and/or language.
             */
            constructor();

            /**
             * The link to the practice details.
             */
            href: string;

            /**
             * Boolean TRUE if the practice has a logo, false otherwise.
             */
            hasLogo: boolean;

            /**
             * Boolean TRUE if the practice has a small logo, false otherwise.
             */
            hasSmallLogo: boolean;

        }

        /**
         * The AWSDKPracticeSubCategory class representing a subCategory object in a {@link AWSDKPracticeCategory}.
         */
        class AWSDKPracticeSubCategory extends AWSDKEntity {
            /**
             * The AWSDKPracticeSubCategory class representing a subCategory object in a {@link AWSDKPracticeCategory}.
             */
            constructor();

            /**
             * The name of this subCategory.
             */
            name: string;

            /**
             * The number of practices in this subCategory.
             */
            practiceCount: number;

        }

        /**
         * AWSDKProvider class which represents a Provider object.
         */
        class AWSDKProvider extends AWSDKEntity {
            /**
             * AWSDKProvider class which represents a Provider object.
             */
            constructor();

            /**
             * The number of patients currently in this provider's waiting room.
             */
            waitingRoomCount: number;

            /**
             * The provider's rating.
             */
            rating: number;

            /**
             * The provider's visibility.
             */
            visibility: AWSDKProviderVisibility;

            /**
             * Boolean TRUE if the provider has an image logo, false otherwise.
             */
            hasImage: boolean;

            /**
             * The provider's first name.
             */
            firstName: string;

            /**
             * The provider's last name.
             */
            lastName: string;

            /**
             * The provider's full name.
             */
            fullName: string;

            /**
             * The provider's specialty.
             */
            specialty: AWSDKProviderType;

            /**
             * The source id for this provider.
             */
            sourceId: string;

            /**
             * The practice associated with this provider.
             */
            practice: AWSDKPracticeInfo;

            /**
             * The url to this provider's details.
             */
            href: string;

            /**
             * The Provider's middle initial.
             */
            middleInitial: string;

            /**
             * Boolean TRUE if the Provider can write prescriptions, false otherwise.
             */
            canPrescribe: boolean;

            /**
             * The provider's {@link AWSDKGender}.
             */
            genderEnum: AWSDKGender;

            /**
             * The provider's localized gender.
             */
            localizedGender: string;

            /**
             * The url of this provider's logo image.
             */
            logoUrl: string;

        }

        /**
         * A class representing a collection of {@link AWSDKProviderAvailability} objects.
         */
        class AWSDKProvidersAvailability extends AWSDKDataObject {
            /**
             * A class representing a collection of {@link AWSDKProviderAvailability} objects.
             */
            constructor();

            /**
             * Representing an array of {@link AWSDKProviderAvailability} objects.
             */
            futureAvailableProviders: AWSDKProviderAvailability[];

            /**
             * The date for which these providers are available.
             */
            date: Date;

        }

        /**
         * AWSDKProviderAvailability class which represents a Provider with available time slot for appointments.
         */
        class AWSDKProviderAvailability extends AWSDKDataObject {
            /**
             * AWSDKProviderAvailability class which represents a Provider with available time slot for appointments.
             */
            constructor();

            /**
             * The provider.
             */
            provider: AWSDKProvider;

            /**
             * The available appointment time slots.
             */
            availableAppointmentTimeSlots: Date[];

        }

        /**
         * This class represents the search criteria for finding a provider's availability.
         * Get an instance of this via {@link ProviderService#getNewProviderAvailabilityCriteria()|ProviderService.getNewProviderAvailabilityCriteria}.
         */
        class AWSDKProviderAvailabilityCriteria {
            /**
             * This class represents the search criteria for finding a provider's availability.
             * Get an instance of this via {@link ProviderService#getNewProviderAvailabilityCriteria()|ProviderService.getNewProviderAvailabilityCriteria}.
             */
            constructor();

            /**
             * The {@link AWSDKProviderDetails} to use.
             */
            providerDetails: AWSDKProviderDetails;

            /**
             * The canonical time zone to use, i.e. America/New_York.
             */
            timeZone: string;

            /**
             * The appointment date to filter the available dates on.
             */
            appointmentDate: Date;

            /**
             * The number of days past the specified appointment date to filter providers on.
             */
            limitInDays: number;

        }

        /**
         * AWSDKProviderDetails class represents extra information relative to a {@link AWSDKProvider}.
         */
        class AWSDKProviderDetails extends AWSDKProvider {
            /**
             * AWSDKProviderDetails class represents extra information relative to a {@link AWSDKProvider}.
             */
            constructor();

            /**
             * The provider's gender.
             */
            gender: string;

            /**
             * The provider's localized gender.
             */
            localizedGender: string;

            /**
             * The provider's appointment duration in minutes.
             */
            appointmentDuration: number;

            /**
             * The text to be displayed if deferred billing is enabled.
             */
            deferredBillingText: string;

            /**
             * The year of this provider's graduation.
             */
            graduatingYear: Date;

            /**
             * Boolean TRUE if show triage questions, false otherwise.
             */
            showTriageQuestions: boolean;

            /**
             * Boolean TRUE if this provider sends a email on missed visits.
             */
            missedVisitEmail: boolean;

            /**
             * The number of ratings.
             */
            totalRatings: number;

            /**
             * The states that this provider is licensed in.
             */
            statesLicensedIn: string[];

            /**
             * The location of this provider's residency.
             */
            residency: string;

            /**
             * The provider's greeting.
             */
            textGreeting: string;

            /**
             * The years of experience that this provider has.
             */
            yearsExperience: number;

            /**
             * Boolean TRUE if this provider has deferred billing enabled.
             */
            deferredBillingEnabled: boolean;

            /**
             * Boolean TRUE if this provider is a Primary Care Physician (PCP).
             */
            isPCP: boolean;

            /**
             * The name of the school this provider attended.
             */
            schoolName: string;

            /**
             * Boolean TRUE if the provider is in the National Telehealth Network (NTN), false otherwise.
             */
            isNTN: boolean;

            /**
             * The list of spoken languages.
             */
            spokenLanguages: AWSDKResource[];

            /**
             * The list of board certifications.
             */
            boardCertificates: string[];

            /**
             * The internship this Provider has done.
             */
            internship: string;

            /**
             * The legal disclaimers associated with the Provider.
             */
            legalText: AWSDKDisclaimer;

            /**
             * The institutions this Provider is a fellow of.
             */
            fellowships: string[];

        }

        /**
         * AWSDKProviderType class which represents a type of Provider.
         * See {@link AWSDKResource} for details.
         */
        class AWSDKProviderType extends AWSDKResource {
            /**
             * AWSDKProviderType class which represents a type of Provider.
             * See {@link AWSDKResource} for details.
             */
            constructor();

        }

        /**
         * Enum for AWSDKProviderVisibility.
         */
        enum AWSDKProviderVisibility {
            /**
             * The provider appears offline to consumers, but may not actually be offline. For example the provider can be available by appointment only.
             */
          OFFLINE = 'OFFLINE',
            /**
             * The provider is logged in via phone, but busy.
             */
          PHONE_BUSY = 'PHONE_BUSY',
            /**
             * The provider is available for phone conversations, but not web.
             */
          PHONE_AVAILABLE = 'PHONE_AVAILABLE',
            /**
             * The provider is logged in via web, but busy.
             */
          WEB_BUSY = 'WEB_BUSY',
            /**
             * The provider is available for web conversations.
             */
          WEB_AVAILABLE = 'WEB_AVAILABLE',
        }

        /**
         * Contains data needed to register a new {@link AWSDKConsumer}.
         * Get an instance of this via {@link ConsumerService#newConsumerRegistration|ConsumerService.newConsumerRegistration}.
         */
        class AWSDKConsumerRegistration extends AWSDKConsumerUpdate {
            /**
             * Contains data needed to register a new {@link AWSDKConsumer}.
             * Get an instance of this via {@link ConsumerService#newConsumerRegistration|ConsumerService.newConsumerRegistration}.
             */
            constructor();

            /**
             * Boolean TRUE if the Consumer has accepted legal disclaimer, false otherwise.
             */
            hasAcceptedDisclaimer: boolean;

            /**
             * Boolean TRUE to send the welcome email, false otherwise.
             */
            sendWelcomeEmail: boolean;

        }

        /**
         * Contains data needed to register a new {@link AWSDKConsumer} dependent.
         * Get an instance of this via {@link ConsumerService#getNewDependentRegistration()|ConsumerService.getNewDependentRegistration}.
         */
        class AWSDKDependentRegistration extends AWSDKBaseConsumerUpdate {
            /**
             * Contains data needed to register a new {@link AWSDKConsumer} dependent.
             * Get an instance of this via {@link ConsumerService#getNewDependentRegistration()|ConsumerService.getNewDependentRegistration}.
             */
            constructor();

            /**
             * Boolean indicating whether or not there should be a check for existence of the {@link AWSDKDependent} we're trying to register @since 2.0.0.
             */
            performDependentCheck: boolean;

        }

        /**
         * This class contains all necessary information for representing a secure message attachment.
         */
        class AWSDKAttachment extends AWSDKEntity {
            /**
             * This class contains all necessary information for representing a secure message attachment.
             */
            constructor();

            /**
             * The name of the attachment.
             */
            name: string;

            /**
             * The size of the attachment in bytes.
             */
            size: number;

            /**
             * The type of the attachment.
             */
            type: string;

            /**
             * The sourceId of the attachment.
             */
            sourceId: string;

        }

        /**
         * This class contains all necessary information for representing a detailed message.
         */
        class AWSDKDetailedMessage extends AWSDKSecureMessage {
            /**
             * This class contains all necessary information for representing a detailed message.
             */
            constructor();

            /**
             * The full message body.
             */
            body: string;

            /**
             * Whether or not you can reply to the message.
             */
            canReply: boolean;

            /**
             * Number of attachments on the message.
             */
            attachmentCount: number;

            /**
             * Array of attachments on the message.
             */
            attachments: AWSDKAttachment[];

            /**
             * Whether or not the thread is still open.
             */
            threadOpen: boolean;

            /**
             * The sender of the message.
             */
            sender: AWSDKAccount;

            /**
             * The recipients of the message.
             */
            recipients: AWSDKAccount[];

            /**
             * The type of this message.
             */
            messageType: AWSDKMessageType;

        }

        /**
         * This class contains all necessary information for representing a secure message inbox.
         */
        class AWSDKInbox extends AWSDKMailbox {
            /**
             * This class contains all necessary information for representing a secure message inbox.
             */
            constructor();

            /**
             * The messages in the inbox.
             */
            messages: AWSDKInboxMessage[];

            /**
             * The total number of unread messages.
             */
            unread: number;

        }

        /**
         * This class contains all necessary information for representing an inbox message.
         */
        class AWSDKInboxMessage extends AWSDKMailboxMessage {
            /**
             * This class contains all necessary information for representing an inbox message.
             */
            constructor();

            /**
             * The self recipient of the message (current consumer).
             */
            selfRecipient: string;

            /**
             * Whether or not the message is unread.
             */
            isUnread: boolean;

        }

        /**
         * This class contains all necessary information for representing a secure message mailbox.
         */
        class AWSDKMailbox extends AWSDKEntity {
            /**
             * This class contains all necessary information for representing a secure message mailbox.
             */
            constructor();

            /**
             * The messages in the mailbox.
             */
            messages: AWSDKMailboxMessage[];

            /**
             * The timestamp the mailbox was retrieved.
             */
            timestamp: Date;

            /**
             * The total number of messages.
             */
            total: number;

        }

        /**
         * This class contains all necessary information for representing a mailbox message.
         */
        class AWSDKMailboxMessage extends AWSDKSecureMessage {
            /**
             * This class contains all necessary information for representing a mailbox message.
             */
            constructor();

            /**
             * An array of all member recipients.
             */
            memberRecipients: string[];

            /**
             * An array of all non-member recipients.
             */
            nonMemberRecipients: string[];

            /**
             * The sender's name.
             */
            senderName: string;

            /**
             * The preview of the body of the message.
             */
            bodyPreview: string;

            /**
             * Whether or not the message has an attachment.
             */
            hasAttachment: boolean;

            /**
             * Whether or not the message is replied to.
             */
            isReplied: boolean;

        }

        /**
         * Enum for AWSDKMessageType.
         */
        enum AWSDKMessageType {
            /**
             * The inbox message type.
             */
          Inbox = 'Inbox',
            /**
             * The sent message type.
             */
          Sent = 'Sent',
        }

        /**
         * This class contains all necessary information for representing a secure message.
         */
        class AWSDKSecureMessage extends AWSDKEntity {
            /**
             * This class contains all necessary information for representing a secure message.
             */
            constructor();

            /**
             * The subject of the message.
             */
            subject: string;

            /**
             * The topic of the message.
             */
            topicType: AWSDKTopicType;

            /**
             * Whether or not the message is the last message in the thread.
             */
            isLastMessageInThread: boolean;

            /**
             * Whether or not the message is a system notification.
             */
            isSystemNotification: boolean;

            /**
             * TRUE if the message is deleted.
             */
            isDeleted: boolean;

            /**
             * The date of the message.
             */
            date: Date;

            /**
             * String url that points to this secure message.
             */
            href: string;

        }

        /**
         * This class contains all necessary information for representing a secure message contact.
         */
        class AWSDKSecureMessageContact extends AWSDKNamedEntity {
            /**
             * This class contains all necessary information for representing a secure message contact.
             */
            constructor();

            /**
             * The type of userType of the contact.
             */
            userType: AWSDKUserType;

            /**
             * TRUE if the contact accepts secure messages.
             */
            acceptsSecureMessage: boolean;

        }

        /**
         * This class contains all necessary information for representing a sent message.
         */
        class AWSDKSentMessage extends AWSDKMailboxMessage {
            /**
             * This class contains all necessary information for representing a sent message.
             */
            constructor();

        }

        /**
         * This class contains all necessary information for representing a collection of sent messages.
         */
        class AWSDKSentMessages extends AWSDKMailbox {
            /**
             * This class contains all necessary information for representing a collection of sent messages.
             */
            constructor();

            /**
             * The sent messages.
             */
            messages: AWSDKSentMessage[];

        }

        /**
         * This class contains all necessary information for representing a forward message draft.
         * Get an instance of this via {@link SecureMessageService#getForwardMessageDraft|SecureMessageService.getForwardMessageDraft}.
         */
        class AWSDKForwardMessageDraft extends AWSDKMessageDraft {
            /**
             * This class contains all necessary information for representing a forward message draft.
             * Get an instance of this via {@link SecureMessageService#getForwardMessageDraft|SecureMessageService.getForwardMessageDraft}.
             */
            constructor();

            /**
             * The recipient of the message.
             */
            recipient: AWSDKSecureMessageContact;

        }

        /**
         * Enum for AWSDKMessageActionType.
         */
        enum AWSDKMessageActionType {
            /**
             * The Forward message action.
             */
          New = 'New',
            /**
             * The Forward message action.
             */
          Forward = 'Forward',
            /**
             * The Forward message action.
             */
          Reply = 'Reply',
        }

        /**
         * This class contains all necessary information for representing a message draft. Use one of the more specific subclasses
         * to send a New, Reply, or Forward message rather than using this class directly.
         */
        class AWSDKMessageDraft {
            /**
             * This class contains all necessary information for representing a message draft. Use one of the more specific subclasses
             * to send a New, Reply, or Forward message rather than using this class directly.
             */
            constructor();

            /**
             * The subject of the message.
             */
            subject: string;

            /**
             * The body of the message.
             */
            body: string;

            /**
             * The topicType of the message.
             */
            topicType: AWSDKTopicType;

            /**
             * The actionType of the message @since 1.3.0.
             */
            actionType: AWSDKMessageActionType;

            /**
             * The encrypted id of the recipient for the message.
             */
            recipientEncryptedId: string;

            /**
             * The name of the recipient for the message.
             */
            recipientName: string;

            /**
             * The type of the sourceMessage.
             */
            sourceMessageType: string;

            /**
             * The encrypted id of the sourceMessage.
             */
            sourceMessageId: string;

            /**
             * TRUE if health summary should be attached to the message.
             */
            attachHealthSummary: boolean;

            /**
             * TRUE if the sourceMessage is a System Notification Message.
             */
            sourceIsSystemNotification: boolean;

            /**
             * The uploadAttachment for the message.
             */
            uploadAttachment: AWSDKUploadAttachment;

        }

        /**
         * This class contains all necessary information for representing a new message draft.
         * Get an instance of this via {@link SecureMessageService#getNewMessageDraft|SecureMessageService.getNewMessageDraft}.
         */
        class AWSDKNewMessageDraft extends AWSDKMessageDraft {
            /**
             * This class contains all necessary information for representing a new message draft.
             * Get an instance of this via {@link SecureMessageService#getNewMessageDraft|SecureMessageService.getNewMessageDraft}.
             */
            constructor();

            /**
             * The topic of the message.
             */
            topicType: AWSDKTopicType;

            /**
             * The recipient of the message.
             */
            recipient: AWSDKSecureMessageContact;

        }

        /**
         * This class contains all necessary information for representing a reply message draft.
         * Get an instance of this via {@link SecureMessageService#getReplyMessageDraft|SecureMessageService.getReplyMessageDraft}.
         */
        class AWSDKReplyMessageDraft extends AWSDKMessageDraft {
            /**
             * This class contains all necessary information for representing a reply message draft.
             * Get an instance of this via {@link SecureMessageService#getReplyMessageDraft|SecureMessageService.getReplyMessageDraft}.
             */
            constructor();

        }

        /**
         * This class contains all necessary information for representing a secure message uploaded attachment.
         * Get an instance of this via {@link SecureMessageService#newUploadAttachment|SecureMessageService.newUploadAttachment}.
         */
        class AWSDKUploadAttachment {
            /**
             * This class contains all necessary information for representing a secure message uploaded attachment.
             * Get an instance of this via {@link SecureMessageService#newUploadAttachment|SecureMessageService.newUploadAttachment}.
             */
            constructor();

            /**
             * A blob of data represented by a blob or a file.
             */
            data: Blob | File;

            /**
             * The name of the attachment.
             */
            name: string;

        }

        /**
         * This class represents the search criteria for finding trackers.
         * Get an instance of this via {@link ConsumerService#getNewTrackersSearchCriteria()|PracticeService.getNewTrackersSearchCriteria}.
         */
        class AWSDKTrackersSearchCriteria {
            /**
             * This class represents the search criteria for finding trackers.
             * Get an instance of this via {@link ConsumerService#getNewTrackersSearchCriteria()|PracticeService.getNewTrackersSearchCriteria}.
             */
            constructor();

            /**
             * The tracker template associated with this search criteria.
             */
            "criteria.trackerTemplate": AWSDKTrackerTemplate;

            /**
             * The consumer's canonical time zone to ensure correct dates are used. This needs to be a canonical id as define in {@link http://joda-time.sourceforge.net/timezones.html}. For example: 'America/New_York'.
             */
            "criteria.timeZone": string;

            /**
             * The datetime to start the search from.
             */
            "criteria.startDate": Date;

            /**
             * The datetime to terminate the search at.
             */
            "criteria.endDate": Date;

        }

        /**
         * A class that encapsulates the common properties to all trackers and their sub-components.
         */
        class AWSDKTrackerBaseObject extends AWSDKDataObject {
            /**
             * A class that encapsulates the common properties to all trackers and their sub-components.
             */
            constructor();

            /**
             * The universal unique identifier for this component. This will uniquely identify the component against all other existing components.
             */
            uuid: string;

            /**
             * The string title name of this component.
             */
            title: string;

        }

        /**
         * This class represents a single measurable component of a medical test indicator. For example the blood pressure indicator has systolic and diastolic component.
         */
        class AWSDKTrackerComponent extends AWSDKTrackerUnitOfMeasure {
            /**
             * This class represents a single measurable component of a medical test indicator. For example the blood pressure indicator has systolic and diastolic component.
             */
            constructor();

            /**
             * The maximum allowed value for this component.
             */
            maximum: number;

            /**
             * The minimum allowed value for this component.
             */
            minimum: number;

        }

        /**
         * This class represents a single data point in terms of a tracker measurement.
         */
        class AWSDKTrackerDataPoint extends AWSDKTrackerUnitOfMeasure {
            /**
             * This class represents a single data point in terms of a tracker measurement.
             */
            constructor();

            /**
             * The date that this measurement was taken.
             */
            measurementDate: Date;

            /**
             * The value that was registered by this measurement.
             */
            value: number;

        }

        /**
         * This class represents a single tracker data point request for a tracker component.
         */
        class AWSDKTrackerDataPointRequest {
            /**
             * This class represents a single tracker data point request for a tracker component.
             */
            constructor();

            /**
             * The tracker component whose data point we want to add.
             */
            trackerComponent: AWSDKTrackerComponent;

            /**
             * The float number representing the value of the measured data point.
             */
            value: number;

        }

        /**
         * This class represents a single tracker entry.
         */
        class AWSDKTrackerEntry extends AWSDKDataObject {
            /**
             * This class represents a single tracker entry.
             */
            constructor();

            /**
             * The string representing the information's origin.
             */
            source: string;

            /**
             * The date for this entry.
             */
            date: Date;

            /**
             * An array of {@link AWSDKTrackerDataPoint} for this tracker entry.
             */
            data: AWSDKTrackerDataPoint[];

        }

        /**
         * This class represents a entry request on the tracker request object.
         */
        class AWSDKTrackerEntryRequest {
            /**
             * This class represents a entry request on the tracker request object.
             */
            constructor();

            /**
             * The tracker template whose uuid we need.
             */
            trackerTemplate: AWSDKTrackerTemplate;

            /**
             * The array of data point requests pertaining to this tracker.
             */
            data: AWSDKTrackerDataPointRequest[];

        }

        /**
         * A class that contains all the pertinent properties for successfully adding a tracker.
         */
        class AWSDKTrackerRequest {
            /**
             * A class that contains all the pertinent properties for successfully adding a tracker.
             */
            constructor();

            /**
             * The dateTime when this measurement was taken.
             */
            measurementDateTime: Date;

            /**
             * The timeZone that the consumer is using, so that correct dates are used.
             */
            canonicalTimeZone: string;

            /**
             * The array of tracker entries associated with this request.
             */
            entries: AWSDKTrackerEntryRequest[];

        }

        /**
         * This class represents a template for all existing trackers.
         */
        class AWSDKTrackerTemplate extends AWSDKTrackerBaseObject {
            /**
             * This class represents a template for all existing trackers.
             */
            constructor();

            /**
             * An array of components that combined make up the full measurement of this tracker template.
             */
            components: AWSDKTrackerComponent[];

        }

        /**
         * This class represents a wrapper for the unit of measure's short and full descriptions.
         */
        class AWSDKTrackerUnitOfMeasure extends AWSDKTrackerBaseObject {
            /**
             * This class represents a wrapper for the unit of measure's short and full descriptions.
             */
            constructor();

            /**
             * The description of the units of measure for this component in symbolic notation. Ex: mg/dL.
             */
            unitOfMeasureShortDescription: string;

            /**
             * The description of the units of measure for this component in words rather than symbols. Ex: milligrams per deciliter.
             */
            unitOfMeasureFullDescription: string;

        }

        /**
         * This class represents an agenda follow-up item pertaining to the {@link AWSDKConsumer} that should be followed up with a {@link AWSDKProvider}.
         */
        class AWSDKAgendaItemFollowUp extends AWSDKEntity {
            /**
             * This class represents an agenda follow-up item pertaining to the {@link AWSDKConsumer} that should be followed up with a {@link AWSDKProvider}.
             */
            constructor();

            /**
             * The description of the agenda item.
             */
            description: string;

            /**
             * Boolean TRUE if this is a recurring agenda item.
             */
            isRecurring: boolean;

            /**
             * The duration for which to continue this agenda item. Will return value if is a recurring agenda item.
             */
            duration: string;

            /**
             * The frequency of the recurrence of this item. Will return value if is a recurring agenda item.
             */
            frequency: string;

            /**
             * The agenda item type.
             */
            type: AWSDKAgendaItemFollowUpType;

        }

        /**
         * This Entity represents the details of an online follow up in detail
         * and is more specific than the {@link AWSDKAgendaItemFollowUp}
         * @since TODO
         */
        class AWSDKOnlineVisitFollowUpItem extends AWSDKAgendaItemFollowUp {

            /**
             * The type or specialty of the provider being recommended for a follow up, exclusive of the assigned provider being set
             */
            assignedProviderType: AWSDKProviderType;

            /**
             * Provider that the consumer was referred to have a visit with
             */
            assignedProvider: AWSDKProvider;

            /**
             * Provider that had the original visit with the consumer that did the referring
             */
            referringProvider: AWSDKProvider

            /**
             * These are the topic notes provided by the referringProvider
             */
            notes: string;

            /**
             * Boolean TRUE if the online visit follow-up has been resolved, false otherwise.
             */
            resolved: boolean;
        }

        /**
         * Enum for AWSDKAgendaItemFollowUpType.
         */
        enum AWSDKAgendaItemFollowUpType {
            /**
             * Visit.
             */
          Visit = 'Visit',
            /**
             * Administered Intake.
             */
          AdministeredIntake = 'AdministeredIntake',
            /**
             * Tracker Reminder.
             */
          TrackerReminder = 'TrackerReminder',
            /**
             * Media.
             */
          Media = 'Media',
        }

        /**
         * Enum for AWSDKConferenceStatus.
         */
        enum AWSDKConferenceStatus {
            /**
             * Waiting.
             */
          Waiting = 'Waiting',
            /**
             * Started.
             */
          Started = 'Started',
            /**
             * Ended.
             */
          Ended = 'Ended',
            /**
             * Cancelled.
             */
          Cancelled = 'Cancelled',
            /**
             * Disabled.
             */
          Disabled = 'Disabled',
        }

        /**
         * The AWSDKConsumerFeedbackQuestion class represents a single Q&A that the {@link AWSDKProvider} displays to the {@link AWSDKConsumer}
         * during the Consumer's visit summary review.
         */
        class AWSDKConsumerFeedbackQuestion extends AWSDKDataObject {
            /**
             * The AWSDKConsumerFeedbackQuestion class represents a single Q&A that the {@link AWSDKProvider} displays to the {@link AWSDKConsumer}
             * during the Consumer's visit summary review.
             */
            constructor();

            /**
             * Boolean TRUE if should show the feedback question, false otherwise.
             */
            show: boolean;

            /**
             * The question to pose to the consumer.
             */
            questionText: string;

            /**
             * An array of {@link String} representing response options to the question above.
             */
            responseOptions: string[];

        }

        /**
         * Enum for AWSDKConsumerInitiatedIVRStatus.
         */
        enum AWSDKConsumerInitiatedIVRStatus {
            /**
             * Consumer chose to initiate IVR callback.
             */
          IVR_REQUESTED = 'IVR_REQUESTED',
            /**
             * The IVR request has timed out.
             */
          IVR_TIMEOUT = 'IVR_TIMEOUT',
            /**
             * Set when outdial request is sent to IVR.
             */
          IVR_DIALING_CONSUMER = 'IVR_DIALING_CONSUMER',
            /**
             * Consumer didn't answer or answered and didn't enter DTMF (Dual-tone multi-frequency) (I.E.
             * pressed a key on the telephone keypad).
             */
          IVR_CONSUMER_UNREACHABLE = 'IVR_CONSUMER_UNREACHABLE',
            /**
             * Consumer has opted-out of joining the IVR call after an attempt to establish this call has
             * already failed.
             */
          IVR_CONSUMER_FAILED = 'IVR_CONSUMER_FAILED',
            /**
             * Consumer has successfully connected to IVR and is now attempting to reach out to the provider.
             */
          IVR_DIALING_PROVIDER = 'IVR_DIALING_PROVIDER',
            /**
             * Provider didn't answer or answered and didn't enter DTMF (Dual-tone multi-frequency) (I.E.
             * pressed a key on the telephone keypad).
             */
          IVR_PROVIDER_UNREACHABLE = 'IVR_PROVIDER_UNREACHABLE',
            /**
             * Provider has opted-out of joining the IVR call.
             */
          IVR_PROVIDER_FAILED = 'IVR_PROVIDER_FAILED',
            /**
             * Both Users Have Successfully Connected.
             */
          IVR_CONNECTED = 'IVR_CONNECTED',
        }

        /**
         * Enum for AWSDKDisposition.
         */
        enum AWSDKDisposition {
            /**
             * This state is meant to be temporary. Allows agenda items created by the provider in the console, to be
             * deleted in provider wrap-up. Also used when assessments are creating items and then later rolls them up
             * together (in the case of visits).
             */
          Unpublished = 'Unpublished',
            /**
             * Will cause an item to show up on a consumer's To-Do list.
             */
          Unscheduled = 'Unscheduled',
            /**
             * A visit which is on the provider's calendar.
             */
          Scheduled = 'Scheduled',
            /**
             * Consumer is waiting for a provider to become available.
             */
          Parked = 'Parked',
            /**
             * Consumer canceled the visit. Can happen by leaving the visit console prior
             * to the provider entering or canceling the appointment from the email.
             */
          ConsumerCanceled = 'ConsumerCanceled',
            /**
             * Provider declines the visit either on the drape or on the review connection details page.
             */
          Declined = 'Declined',
            /**
             * Provider fails respond in time to either the drape or review connection details.
             */
          ProviderResponseTimeout = 'ProviderResponseTimeout',
            /**
             * Initiator is waiting for the provider and may be chatting with an assistant.
             */
          PreVisitScreening = 'PreVisitScreening',
            /**
             * Visit is currently happening between provider and consumer.
             */
          InProgress = 'InProgress',
            /**
             * Provider has finished conversation and consumer is in post-visit with an assistant.
             */
          PostVisitConversation = 'PostVisitConversation',
            /**
             * Provider clicks the cancel button DURING an visit.
             */
          Bailed = 'Bailed',
            /**
             * Provider Disconnected.
             */
          ProviderDisconnected = 'ProviderDisconnected',
            /**
             * Visit has finished, but provider is completing the details.
             */
          ProviderWrapup = 'ProviderWrapup',
            /**
             * Consulting provider wrapped up but primary provider hasn't. Limbo state lasts 24 hours max, P2P only.
             */
          ConsultingProviderWrappedUp = 'ConsultingProviderWrappedUp',
            /**
             * Completed.
             */
          Completed = 'Completed',
            /**
             * A failure occurred during background processing and the object should be considered invalid.
             */
          Error = 'Error',
            /**
             * Collapsed and "Deleted". This item has been collapsed into another agenda item, and access to it has been
             * removed. This disposition serves to "soft" delete an item and remaining references to it in the database
             * without removing the actual row.
             */
          CollapseDeleted = 'CollapseDeleted',
            /**
             * Visit is deleted by consumer.
             */
          Deleted = 'Deleted',
            /**
             * Provider Canceled a scheduled visit.
             */
          ProviderCanceled = 'ProviderCanceled',
            /**
             * Consumer Disconnected (pre-threshold). The threshold is the billing threshold. So if a consumer gets disconnected
             * before 5 mins, they don't have to pay - after they do.
             */
          ConsumerDisconnected = 'ConsumerDisconnected',
            /**
             * The Consumer missed a visit scheduled by a provider or assistant.
             */
          Expired = 'Expired',
        }

        /**
         * Enum for AWSDKEligibilityRequestStatus.
         */
        enum AWSDKEligibilityRequestStatus {
            /**
             * Successful invocation of remote service with a response that contains coverage and benefits data.
             * The consumer has active coverage at the time of inquiry.
             */
          COVERED = 'COVERED',
            /**
             * Successful invocation of remote service with a response that contains coverage and benefits data.
             * The consumer does not have active coverage.
             * Consumer is not covered or not on file at the time of inquiry.
             */
          NOT_COVERED = 'NOT_COVERED',
            /**
             * Successful invocation of remote service with a response that request validation information.
             * Specifically, the 271 response contains AAA segment that contain
             * request validation error instead of eligibility and benefits info.
             */
          REQUEST_VALIDATION_RESPONSE = 'REQUEST_VALIDATION_RESPONSE',
            /**
             * Invocation of remote service failed.
             */
          FAILED = 'FAILED',
            /**
             * Invocation of remote service was cancelled in-flight.
             */
          CANCELLED = 'CANCELLED',
        }

        /**
         * Enum for AWSDKEndReason.
         */
        enum AWSDKEndReason {
            /**
             * The visit expired.
             */
          VISIT_EXPIRED = 'VISIT_EXPIRED',
            /**
             * The consumer was disconnected after the payment threshold.
             */
          CONSUMER_DISCONNECT_POST_THRESHOLD = 'CONSUMER_DISCONNECT_POST_THRESHOLD',
            /**
             * The consumer was disconnected before the payment threshold.
             */
          CONSUMER_DISCONNECT_PRE_THRESHOLD = 'CONSUMER_DISCONNECT_PRE_THRESHOLD',
            /**
             * The consumer was forcefully disconnected by an admin.
             */
          CONSUMER_FORCED_DISCONNECT = 'CONSUMER_FORCED_DISCONNECT',
            /**
             * The consumer canceled the visit.  This can happen by entering the visit
             * console (for a scheduled or unscheduled visit) and canceling before
             * the provider enters.
             */
          CONSUMER_CANCEL = 'CONSUMER_CANCEL',
            /**
             * The consumer failed to authenticate via IVR (didn't pick up the phone, or wrong PIN).
             */
          CONSUMER_IVR_AUTH_FAILED = 'CONSUMER_IVR_AUTH_FAILED',
            /**
             * The consumer ended the visit.
             */
          CONSUMER_END = 'CONSUMER_END',
            /**
             * The initiator logged out during pre-visit screening.
             */
          INITIATOR_LOGOUT_PRE_VISIT = 'INITIATOR_LOGOUT_PRE_VISIT',
            /**
             * The initiator logged out after starting the visit with the provider.
             */
          INITIATOR_LOGOUT_AFTER_START = 'INITIATOR_LOGOUT_AFTER_START',
            /**
             * Consulting provider gracefully ended an visit. This is possible only if the visit is zero-cost to
             * the consumer. Otherwise, the end reason would be PROVIDER_BAIL.
             */
          PROVIDER_END = 'PROVIDER_END',
            /**
             * The provider declined the visit.
             */
          PROVIDER_DECLINE = 'PROVIDER_DECLINE',
            /**
             * The provider declined and transferred the visit.
             */
          PROVIDER_DECLINE_AND_TRANSFER = 'PROVIDER_DECLINE_AND_TRANSFER',
            /**
             * The provider bailed out of the visit.
             */
          PROVIDER_BAIL = 'PROVIDER_BAIL',
            /**
             * The provider was disconnected.
             */
          PROVIDER_DISCONNECT = 'PROVIDER_DISCONNECT',
            /**
             * The provider did not respond in time.
             */
          PROVIDER_RESPONSE_TIMEOUT = 'PROVIDER_RESPONSE_TIMEOUT',
            /**
             * The provider logged out.
             */
          PROVIDER_LOGOUT = 'PROVIDER_LOGOUT',
            /**
             * The provider failed to authenticate via IVR.
             */
          PROVIDER_IVR_AUTH_FAILED = 'PROVIDER_IVR_AUTH_FAILED',
            /**
             * The assistant declined on behalf of the provider.
             */
          ASSISTANT_DECLINE = 'ASSISTANT_DECLINE',
            /**
             * The assistant declined and transferred on behalf of the provider.
             */
          ASSISTANT_DECLINE_AND_TRANSFER = 'ASSISTANT_DECLINE_AND_TRANSFER',
            /**
             * Ejected from waiting room due to provider disconnection.
             */
          WAITING_ROOM_EXPIRED = 'WAITING_ROOM_EXPIRED',
            /**
             * An unexpected exception occurred while calculating the visit cost asynchronously.
             */
          ASYNC_COST_CALC_EXCEPTION = 'ASYNC_COST_CALC_EXCEPTION',
            /**
             * Consumer has chosen to transfer to a different provider.
             */
          CONSUMER_TRANSFER = 'CONSUMER_TRANSFER',
            /**
             * The vidyo visit setup failed and the visit cannot continue without vidyo.
             */
          VIDYO_FAILED = 'VIDYO_FAILED',
        }

        /**
         * This class represents the estimated cost of a visit with a Provider.
         */
        class AWSDKEstimatedVisitCost extends AWSDKEntity {
            /**
             * This class represents the estimated cost of a visit with a Provider.
             */
            constructor();

            /**
             * The estimated cost of the visit.
             */
            cost: number;

            /**
             * The localized string of the estimated visit cost.
             */
            formattedCost: string;

            /**
             * The estimated cost of a visit extension.
             */
            extensionCost: number;

            /**
             * The localized string of the estimated visit extension cost.
             */
            formattedExtensionCost: string;

            /**
             * The code of the currency in which the estimated cost is represented.
             */
            currencyCode: string;

            /**
             * Boolean TRUE if deferred billing is supported for cost estimation, false otherwise.
             */
            isDeferredBillingSupported: boolean;

        }

        /**
         * Encompasses data associated with a {@link AWSDKConsumer}'s request for a first-available visit.
         */
        class AWSDKFirstAvailableData extends AWSDKDataObject {
            /**
             * Encompasses data associated with a {@link AWSDKConsumer}'s request for a first-available visit.
             */
            constructor();

            /**
             * The status of the first available search.
             */
            status: AWSDKFirstAvailableStatus;

            /**
             * The {@link AWSDKProvider} that has accepted the consumer's request, if any.
             */
            provider: AWSDKProvider;

            /**
             * The number of providers involved in the first available search.
             */
            firstAvailableProviderAskCount: number;

            /**
             * Whether the first-available request is the result of matchmaking.
             */
            isMatchmaking: boolean;

            /**
             * When the first available search was started.
             */
            firstAvailableSearchStartTime: Date;

            /**
             * When the first available search completed.
             */
            firstAvailableSearchEndTime: Date;

        }

        /**
         * Enum for AWSDKFirstAvailableStatus.
         */
        enum AWSDKFirstAvailableStatus {
            /**
             * The task has started, but no providers have been contacted yet.
             */
          CREATED = 'CREATED',
            /**
             * Awaiting permission from the consumer to contact a provider.
             */
          AWAITING_CONTACT_PERMISSION = 'AWAITING_CONTACT_PERMISSION',
            /**
             * We're contacting a provider and awaiting a response.
             */
          CONTACTING_PROVIDER = 'CONTACTING_PROVIDER',
            /**
             * The provider has accepted the consumer for a conversation. The consumer has a finite time to respond.
             */
          PROVIDER_ACCEPTED = 'PROVIDER_ACCEPTED',
            /**
             * The consumer has acquired a waiting room entry ticket for a provider who accepted them for a conversation.
             */
          TICKET_ACQUIRED = 'TICKET_ACQUIRED',
            /**
             * All eligible providers have been contacted, at least one has not responded, and we are allowing extra time
             * for a response.
             */
          COOL_DOWN = 'COOL_DOWN',
            /**
             * There are no candidate providers left to be contacted.
             */
          PROVIDER_LIST_EXHAUSTED = 'PROVIDER_LIST_EXHAUSTED',
        }

        /**
         * A representation of the intake information gathered prior to a visit starting.
         */
        class AWSDKIntake extends AWSDKDataObject {
            /**
             * A representation of the intake information gathered prior to a visit starting.
             */
            constructor();

            /**
             * The provided conditions.
             */
            conditions: AWSDKCondition[];

            /**
             * The provided allergies.
             */
            allergies: AWSDKAllergy[];

            /**
             * The provided medications.
             */
            medications: AWSDKMedication[];

            /**
             * The provided topics.
             */
            topics: AWSDKTopic[];

        }

        /**
         * This class represents details of a {@link AWSDKPostVisitFollowUpItem}
         * @since TODO
         */
        class AWSDKPostVisitFollowUpDetail extends AWSDKDataObject {

            /**
             * This class represents details of a {@link AWSDKPostVisitFollowUpItem}
             */
            constructor();

            /**
             * Name of the facility that the consumer is being referred to.
             */
            facilityName: string;

            /**
             * Name of the provider that the consumer is being referred to.
             */
            providerName: string;

            /**
             * Phone number for the facility tha the consumer is being referred to.
             */
            phone: string;

            /**
             * Address of the facility that the consumer is being referred to.
             */
            address: AWSDKAddress;
        }

        /**
         * This class represents an action that the {@link AWSDKConsumer} must take following the visit with a {@link AWSDKProvider}.
         */
        class AWSDKPostVisitFollowUpItem extends AWSDKEntity {
            /**
             * This class represents an action that the {@link AWSDKConsumer} must take following the visit with a {@link AWSDKProvider}.
             */
            constructor();
            /**
             * The category of the post visit follow up item.
             */
            category: AWSDKPostVisitFollowUpItemCategory;

            /**
             * The description of the post visit follow up item.
             * Internally defined common language description of this object, not entered by the provider.
             * Example "Referral to Cardiology"
             */
            description: string;

            /**
             * This is the reason entered by the provider that they wish for the consumer to see another provider.
             * @since TODO
             */
            reason: string;

            /**
             * Optional notes that may be entered by the referring provider for the benefit of the referred provider
             * @since TODO
             */
            notes: string;

            /**
             * The name of the specialty for which the consumer is being referred, this is derived from the
             * taxonomy code - which is an administrative 'code' used to identify a provider type and area of speciality
             */
            specialtyName: string;

            /**
             * A detail object for External referrals, external referrals may contain a facility name, provider name,
             * address and phone number
             */
            detail: AWSDKPostVisitFollowUpDetail;

            /**
             * The timestamp of the item (GMT), which will only be available when the item type is APPOINTMENT.
             */
            time: number;

            /**
             * The type of the follow up item.
             */
            type: AWSDKPostVisitFollowUpItemType;

            /**
             * TRUE if this item has been resolved and doesn't require any action.
             */
            resolved: boolean;

            /**
             * The date this item was created.
             */
            createdDate: Date;
        }

        /**
         * Namespace for AWSDKPostVisitFollowUpItemCategory.
         * @readonly
         * @enum {string}
         */
        enum AWSDKPostVisitFollowUpItemCategory {
            /**
             * In Person Referrals.
             */
            VISIT_REFERRAL = "VISIT_REFERRAL",
            /**
             * Imaging.
             */
            IMAGING_REFERRAL = "IMAGING_REFERRAL",
            /**
             * Labs.
             */
            LAB_REFERRAL = "LAB_REFERRAL",
        }

        /**
         * Enum for AWSDKPostVisitFollowUpItemType.
         */
        enum AWSDKPostVisitFollowUpItemType {
            /**
             * Appointment.
             */
            APPOINTMENT = 'APPOINTMENT',
            /**
             * Referral.
             */
            REFERRAL = 'REFERRAL',
            /**
             * Sick slip.
             */
            SICKSLIP = 'SICKSLIP',
        }

        /**
         * This class represents the search result for finding a consumer's {@link AWSDKPostVisitFollowUpItem}s.
         */
        class AWSDKPaginatedPostVisitFollowUpItems extends AWSDKPaginated {
            /**
             * This class represents the search result for finding a consumer's {@link AWSDKPostVisitFollowUpItem}s.
             */
            constructor();

            /**
             * The result list of {@link AWSDKPostVisitFollowUpItem}s that satisfied the search query.
             */
            postVisitFollowUpItems: AWSDKPostVisitFollowUpItem[];
        }

        /**
         * This class represents the unscheduled follow ups for a consumer {@link AWSDKOnlineVisitFollowUpItem}s.
         */
        class AWSDKPaginatedOnlineVisitFollowUpItems extends AWSDKPaginated {

            /**
             * The result list of {@link AWSDKOnlineVisitFollowUpItem}s for the authenticated memeber.
             */
            onlineFollowUpItems: AWSDKOnlineVisitFollowUpItem[];
        }

        /**
         * Namespace for AWSDKPostVisitFollowUpItemsTypeFilter.
         * @readonly
         * @enum {string}
         */
        enum AWSDKPostVisitFollowUpItemsTypeFilter {
            /**
             * Filter to get all results.
             */
            all = "all",
            /**
             * Filter to get only imaging referral types.
             */
            imagingReferral = "imagingReferral",
            /**
             * Filter to get only lab referral types.
             */
            labReferral = "labReferral",
            /**
             * Filter to get only visit referral types.
             */
            visitReferral = "visitReferral",
            /**
             * Filter to get all referral types.
             */
            referral = "referral",
            /**
             * Filter to get only sick slip types.
             */
            sickSlip = "sickSlip",
            /**
             * Filter to get only appointment types.
             */
            appointment = "appointment"
        }

        /**
         * This class represents the search result for finding a consumer's {@link AWSDKHealthDocumentRecord}s.
         */
        class AWSDKPaginatedHealthDocumentRecords extends AWSDKPaginated {

            /**
             * The result list of {@link AWSDKHealthDocumentRecord}s that satisfied the search query.
             */
            healthDocumentRecords: AWSDKHealthDocumentRecord[];
        }

        /**
         * This class represents the search result for finding a consumer's {@link AWSDKVisitReport}s.
         */
        class AWSDKPaginatedVisitReports extends AWSDKPaginated {
            /**
             * This class represents the search result for finding a consumer's {@link AWSDKVisitReport}s.
             */
            constructor();

            /**
             * The result list of {@link AWSDKVisitReport}s that satisfied the search query.
             */
            visitReports: AWSDKVisitReport[];
        }

        /**
         * This class represents all entries that a {@link AWSDKProvider} makes during and after a visit with a {@link AWSDKConsumer}.
         */
        class AWSDKProviderEntries extends AWSDKEntity {
            /**
             * This class represents all entries that a {@link AWSDKProvider} makes during and after a visit with a {@link AWSDKConsumer}.
             */
            constructor();

            /**
             * An array of {@link AWSDKVisitRx} prescriptions for this visit (if any).
             */
            prescriptions: AWSDKVisitRx[];

            /**
             * An array of {@link AWSDKVisitProcedure} for this visit (if any).
             */
            procedures: AWSDKVisitProcedure[];

            /**
             * An array of {@link AWSDKVisitDiagnosis} for this visit (if any).
             */
            diagnoses: AWSDKVisitDiagnosis[];

            /**
             * The provider notes for this visit.
             */
            notes: string;

            /**
             * An array of {@link AWSDKAgendaItemFollowUp}, which represents follow up agenda items (if any).
             */
            agendaItemFollowUps: AWSDKAgendaItemFollowUp[];

            /**
             * An array of {@link AWSDKPostVisitFollowUpItem}, which represents post visit follow up items for this visit (if any).
             */
            postVisitFollowUpItems: AWSDKPostVisitFollowUpItem[];

        }

        /**
         * Note made by an {@link AWSDKProvider} during an {@link AWSDKVisit}.
         */
        class AWSDKProviderNote extends AWSDKDataObject {
            /**
             * Note made by an {@link AWSDKProvider} during an {@link AWSDKVisit}.
             */
            constructor();

            /**
             * The contents of the note.
             */
            message: string;

        }

        /**
         * The AWSDKSpeedPass class represents a speed pass eligible visit.
         * For a description of the available properties see the JSDoc for {@link AWSDKVisit}.
         */
        class AWSDKSpeedPass extends AWSDKVisit {
            /**
             * The AWSDKSpeedPass class represents a speed pass eligible visit.
             * For a description of the available properties see the JSDoc for {@link AWSDKVisit}.
             */
            constructor();

            /**
             * A convenience method to get a {@link AWSDKServerLogParam} object.
             * @returns the server log param object
             */
            getServerLogParam(): Object;

        }

        /**
         * This class represents any restrictions that could be applicable with the ability to prescribe for a given {@link AWSDKProvider} within the state of actual residency of the {@link AWSDKConsumer}.
         */
        class AWSDKStateFormularyRestriction extends AWSDKEntity {
            /**
             * This class represents any restrictions that could be applicable with the ability to prescribe for a given {@link AWSDKProvider} within the state of actual residency of the {@link AWSDKConsumer}.
             */
            constructor();

            /**
             * Boolean TRUE if state formulary is active, false otherwise.
             */
            isStateFormularyActive: boolean;

            /**
             * Boolean TRUE if the state formulary is restricted to otc (over-the-counter), false otherwise.
             */
            isRestrictedToOtc: boolean;

        }

        /**
         * AWSDKTopic class represents any item of interest to be discussed between provider and consumer.
         */
        class AWSDKTopic extends AWSDKEntity {
            /**
             * AWSDKTopic class represents any item of interest to be discussed between provider and consumer.
             */
            constructor();

            /**
             * The title of this topic.
             */
            title: string;

            /**
             * The description of this topic.
             */
            description: string;

            /**
             * Boolean TRUE if this topic has been selected.
             */
            selected: boolean;

        }

        /**
         * The AWSDKTransfer class represents a wrapper for the status of the transfer
         * as well as the visitContext and visit.
         */
        class AWSDKTransfer {
            /**
             * The AWSDKTransfer class represents a wrapper for the status of the transfer
             * as well as the visitContext and visit.
             */
            constructor();

            /**
             * TRUE if this is a quick transfer.
             */
            isQuickTransfer: boolean;

            /**
             * The visitContext for the transfer.
             */
            visitContext: AWSDKVisitContext;

            /**
             * If the transfer was a quick transfer the visit will be created automatically.
             */
            visit: AWSDKVisit;

        }

        /**
         * The AWSDKTriageQuestion class represents a wrapper for a single Q&A during triage.
         */
        class AWSDKTriageQuestion extends AWSDKDataObject {
            /**
             * The AWSDKTriageQuestion class represents a wrapper for a single Q&A during triage.
             */
            constructor();

            /**
             * The triage question to display.
             */
            question: string;

            /**
             * The answer to the question.
             */
            answer: string;

        }

        /**
         * Represents the components that are required to have a WebRTC video visit.
         */
        class AWSDKVideoContext {
            /**
             * Represents the components that are required to have a WebRTC video visit.
             */
            constructor();

            /**
             * Function to execute when the video visit has ended successfully.
             */
            successCallback: Function;

            /**
             * Function to execute when the video visit has encountered an unrecoverable error.
             */
            errorCallback: Function;

            /**
             * The localized strings to be used during the visit.
             */
            messages: object;

            /**
             * The DOM nodes that are specific to this Consumer Web SDK.
             */
            consoleWrapperAttachPoints: HTMLElement;

            /**
             * The DOM node where the video console will be rendered @since 2.0.0.
             */
            videoConsoleContainer: HTMLElement;

        }

        /**
         * Describes the recipient of a video invitation and the type of user that issued the invitation.
         */
        class AWSDKVideoInvitation extends AWSDKDataObject {
            /**
             * Describes the recipient of a video invitation and the type of user that issued the invitation.
             */
            constructor();

            /**
             * The email of the person invited.
             */
            email: string;

            /**
             * The type of the user that issued the invitation.
             */
            inviter: string;

        }

        /**
         * Data encapsulating a guest's video visit.
         */
        class AWSDKVideoParticipant extends AWSDKEntity {
            /**
             * Data encapsulating a guest's video visit.
             */
            constructor();

            /**
             * The number of minutes remaining in the video visit.
             */
            remainingMins: number;

            /**
             * The current status of the visit.
             */
            conferenceStatus: AWSDKConferenceStatus;

            /**
             * Whether or not the visit has started.
             */
            telehealthVideoStarted: boolean;

        }

        /**
         *  An integration between the Amwell telehealth platform and a third party context/platform.
         */
        class AWSDKIntegration {

            /**
             * The context this integration is for.
             */
            context: AWSDKIntegrationContext;
            /**
             * The identifier for the context.
             */
            contextIdentifier: string;
            /**
             * The status of the integration.
             */
            status: AWSDKIntegrationStatus;
            /**
             * A key value map of configuration for this integration.
             */
            config: any
        }

        /**
         * Enum for AWSDKIntegrationContext.
         */
        enum AWSDKIntegrationContext {
            ORBITA = 'ORBITA'
        }

        /**
         * Enum for AWSDKIntegrationStatus.
         */
        enum AWSDKIntegrationStatus {
            /**
             * The integration is added but no action has been taken.
             */
            QUEUED = 'QUEUED',
            /**
             * The integration is ready to be started.
             */
            READY = 'READY',
            /**
             * Interaction with this integration is still in progress.
             */
            INPROGRESS = 'INPROGRESS',
            /**
             * The interaction with this integration is completed.
             */
            COMPLETED = 'COMPLETED',
            /**
             * The integration was bailed on by the consumer.
             */
            BAILED = 'BAILED',
            /**
             * The integration was interrupted.
             */
            INTERRUPTED = 'INTERRUPTED',
            /**
             * There was an error when communicating with the integration.
             */
            ERROR = 'ERROR',
            /**
             * The integration is reset and re-queued.
             */
            RE_QUEUED = 'RE_QUEUED'
        }

        /**
         * The AWSDKVisit class represents the visit object itself.
         */
        class AWSDKVisit extends AWSDKEntity {
            /**
             * The AWSDKVisit class represents the visit object itself.
             */
            constructor();

            /**
             * The amount of time remaining in the visit (in minutes) or null.
             */
            timeRemaining: number;

            /**
             * The amount of time remaining in the visit (in milliseconds) or null.
             */
            timeRemainingMilliseconds: number;

            /**
             * represents information entered by provider during visit: notes, diagnoses, prescriptions, etc.
             */
            providerEntries: AWSDKProviderEntries;

            /**
             * Boolean TRUE if the patient's timer is to be hidden during visit.
             */
            hidePatientTimer: boolean;

            /**
             * The link url to the video executable.
             */
            vidyoPortal: string;

            /**
             * Boolean TRUE if multiway video is enabled, false if not or null if no information exist.
             */
            multiwayVideoEnabled: boolean;

            /**
             * The state of a consumer initiated IVR.
             */
            consumerInitiatedIVRStatus: AWSDKConsumerInitiatedIVRStatus;

            /**
             * The number of video invites that were sent for this visit.
             */
            videoInvitesSent: number;

            /**
             * The number of patients ahead of a consumer for a visit.
             */
            patientsAheadOfYou: number;

            /**
             * Boolean TRUE if the provider for transfer is eligible for a quick transfer, false otherwise.
             */
            isProviderForTransferEligibleForQuickTransfer: boolean;

            /**
             * Boolean TRUE if the provider suggested for a transfer is eligible for quick transfer, false otherwise.
             */
            isSuggestedProviderEligibleForQuickTransfer: boolean;

            /**
             * A report of the content of the chat between provider and consumer.
             */
            chatReport: AWSDKChatReport;

            /**
             * The Provider to be used for a transfer.
             */
            providerForTransfer: AWSDKProvider;

            /**
             * The number of times an interactive voice response (ivr) has been retried.
             */
            ivrretryCount: number;

            /**
             * Boolean TRUE if a paid extension has been offered, false otherwise.
             */
            paidExtensionOffered: boolean;

            /**
             * The consumer's preferred phone number for this visit.
             */
            initiatorEngagementOverridePhone: string;

            /**
             * The consumer's preferred formatted phone number for this visit.
             */
            formattedInitiatorEngagementOverridePhone: string;

            /**
             * The consumer in this visit.
             */
            consumer: AWSDKConsumer;

            /**
             * A dependent to this consumer.
             */
            consumerProxy: AWSDKConsumer;

            /**
             * The disposition of this visit object.
             */
            disposition: AWSDKDisposition;

            /**
             * The reason for ending the visit.
             */
            endReason: AWSDKEndReason;

            /**
             * A proxy to the provider in this visit, such as an assistant.
             */
            providerProxy: AWSDKProvider;

            /**
             * The source id of the visit used to synchronize this visit record with an external system.
             */
            sourceId: string;

            /**
             * Boolean TRUE if the provider suggested that the visit ended, false otherwise.
             */
            providerSuggestedEnd: boolean;

            /**
             * The provider object for this visit.
             */
            assignedProvider: AWSDKProvider;

            /**
             * Boolean TRUE if the visit has finished, false otherwise.
             */
            finished: boolean;

            /**
             * Boolean TRUE if the provider has connected to the visit, false otherwise.
             */
            providerConnected: boolean;

            /**
             * The provider object representing the suggested provider to be transfered to.
             */
            suggestedProviderForTransfer: AWSDKProvider;

            /**
             * TRUE if the option of transferring to a Find First Available provider has been suggested.
             */
            optionForFindFirstAvailableTransferAvailable: boolean;

            /**
             * TRUE if the option of transferring to a Find First Available provider has been accepted.
             */
            possibleFirstAvailableTransferAcceptedByConsumer: boolean;

            /**
             * The link url to this visit object.
             */
            href: string;

            /**
             * An object representing a shortExtension for a visit.
             */
            shortExtensionEntity: AWSDKVisitExtension;

            /**
             * An object representing a longExtension for a visit.
             */
            longExtensionEntity: AWSDKVisitExtension;

            /**
             * An object representing a non-extension for a visit.
             */
            noExtensionEntity: AWSDKVisitExtension;

            /**
             * The cost of the visit.
             */
            cost: AWSDKVisitCost;

            /**
             * Boolean TRUE if telehealthVideo has started.
             */
            telehealthVideoStarted: boolean;

            /**
             * ID of the specialty in which this visit takes place, if any.
             */
            onDemandSpecialtyId: string;

            /**
             * The first-available data associated with this visit.
             */
            firstAvailableData: AWSDKFirstAvailableData;

            /**
             * A collection of emails of guests to invite to this visit.
             */
            guestInvitationEmails: string[];

            /**
             * The question to be presented to consumer for feedback @since 1.4.0.
             */
            consumerFeedbackQuestion: AWSDKConsumerFeedbackQuestion;

            /**
             * Represents the modality associated with this visit @since 1.4.0.
             */
            modality: AWSDKModality;

            /**
             * A collection of emails of invited guests for this visit @since 2.0.0.
             */
            invitedGuestEmails: string[];

            /**
             * A convenience method to get a {@link AWSDKServerLogParam} object.
             * @returns the server log param object
             */
            getServerLogParam(): Object;

            /**
             * TRUE if this visit allows transfer.
             *
             * @type {boolean}
             */
            canTransfer: boolean;

            /**
             * TRUE if this visit allows adding a phone call during an ongoing visit.
             *
             * @type {boolean}
             */
            allowsVisitAddPhone: boolean;

            /**
             * The software the member is using to access the visit - When using the Amwell Consumer Web SDK, this will always be either WEB_SDK or WEB_SDK_AND_PHONE.
             *
             * @type {AWSDKConnectionType}
             */
            initiatorConnectionType: AWSDKConnectionType;

            /**
             * The software the provider is using to access the visit.
             *
             * @type {AWSDKConnectionType}
             */
            providerConnectionType: AWSDKConnectionType;

            /**
             * The object representing the conference room details for this visit, if any.
             *
             * @type {AWSDKConferenceDetails}
             */
            conferenceDetails: AWSDKConferenceDetails;

            /**
             * Boolean TRUE if Tyto live stream mode is enable @since 2.6.0.
             */
            tytoLiveStreamingEnabled: boolean;

            /**
             * A map of {@link AWSDKIntegrationContext} to {@link AWSDKIntegration} integrations for this visit.
             */
            integrations: Map<AWSDKIntegrationContext, AWSDKIntegration>;
        }

        /**
         * AWSDKVisitContext class which represents the initial preparation for a visit.
         */
        class AWSDKVisitContext extends AWSDKDataObject {
            /**
             * AWSDKVisitContext class which represents the initial preparation for a visit.
             */
            constructor();

            /**
             * The consumer to which this visit relates.
             */
            consumer: AWSDKConsumer;

            /**
             * The id of the onDemandSpecialty for this visit.
             */
            onDemandSpecialtyId: string;

            /**
             * The id of the engagement for this visit.
             */
            engagementId: string;

            /**
             * Boolean TRUE if the address is required by provider, false otherwise.
             */
            requireAddress: boolean;

            /**
             * Boolean TRUE if the provider can prescribe medication, false otherwise.
             */
            canPrescribe: boolean;

            /**
             * Boolean TRUE if the provider displays triage questions, false otherwise.
             */
            showTriageQuestions: boolean;

            /**
             * Boolean TRUE if the provider shows conditions questions, false otherwise.
             */
            showConditionsQuestion: boolean;

            /**
             * Boolean TRUE if the provider shows allergies questions, false otherwise.
             */
            showAllergiesQuestion: boolean;

            /**
             * Boolean TRUE if the provider shows medications questions, false otherwise.
             */
            showMedicationsQuestion: boolean;

            /**
             * Boolean TRUE if the provider shows vitals questions, false otherwise.
             */
            showVitalsQuestion: boolean;

            /**
             * Boolean TRUE if the provider has health history for the consumer, false otherwise.
             */
            hasHealthHistory: boolean;

            /**
             * A question to ask the consumer at end of visit with possible answers.
             */
            consumerFeedbackQuestion: AWSDKConsumerFeedbackQuestion;

            /**
             * An array of {@link AWSDKDisclaimer} objects.
             */
            disclaimers: AWSDKDisclaimer[];

            /**
             * Array of {@link String} triage questions for the consumer.
             */
            triageQuestionList: string[];

            /**
             * An array of {@link AWSDKTopic}.
             */
            topics: AWSDKTopic[];

            /**
             * A {@link AWSDEntityId} object with encrypted and persitent id fields.
             */
            intakeId: AWSDKEntityId;

            /**
             * A {@link AWSDKPractice} practice object.
             */
            practice: AWSDKPractice;

            /**
             * Boolean TRUE if the provider requires residency check.
             */
            requireResidencyCheck: boolean;

            /**
             * The provider's encryptedId.
             */
            providerId: string;

            /**
             * Boolean TRUE if the providerId is exists and it's non-empty, false otherwise.
             */
            hasProvider: boolean;

            /**
             * Boolean TRUE ith the specialtyId exists and it's non-empty, false otherwise.
             */
            hasOnDemandSpecialty: boolean;

            /**
             * Boolean TRUE if the provider can share health summary pertaining to consumer, false otherwise.
             */
            shareHealthSummary: boolean;

            /**
             * Collection of {@link AWSDKTriageQuestion} derived from the triageQuestionList.
             */
            triageQuestions: AWSDKTriageQuestion[];

            /**
             * An additional topic to be added to this visit.
             */
            otherTopic: string;

            /**
             * Boolean TRUE if an engagementId exists and it's non-empty, false otherwise.
             */
            hasAppointment: boolean;

            /**
             * A phone number where the Provider can reach the consumer.
             */
            callbackNumber: string;

            /**
             * A collection of the answers to triage questions.
             */
            triageQuestionAnswers: string[];

            /**
             * The time in milliseconds when this visitContext was created.
             */
            timeThisWasCreated: number;

            /**
             * Boolean TRUE if this is a matchmaker visit.
             */
            isMatchmakerVisit: boolean;

            /**
             * Boolean TRUE if this is a quick connect visit.
             */
            isQuickConnect: boolean;

            /**
             * The source id for the visit.
             */
            sourceId: string;

            /**
             * Override the consumer for the visit.
             */
            consumerOverrideDetails: AWSDKConsumer;

            /**
             * Represents the modality type for the visit.
             */
            modalityType: AWSDKVisitModalityType;

            proxies: any;

        }

        class AWSDKEligibilitySuggestedResponse extends AWSDKDataObject {

            /**
             * The name of the suggestion response text.
             */
            value: string;

            /**
             * The localized reason title text.
             */
            title: string;

            /**
             * The localized reason description text.
             */
            description: string;

            /**
             * The localized recovery suggestion text.
             */
            suggestion: string;
        }

        /**
         * The AWSDKVisitCost class represents an object with all the necessary information for the estimated cost of a visit.
         */
        class AWSDKVisitCost extends AWSDKDataObject {
            /**
             * The AWSDKVisitCost class represents an object with all the necessary information for the estimated cost of a visit.
             */
            constructor();

            /**
             * The property representing the status of a cost calculation.
             * If the status is 'FINISHED' then the cost calculation is completed. If it's 'FAILED' then the cost calculation failed.
             */
            costCalculationStatus: string;

            /**
             * The coupon code that has been applied to this visit.
             */
            couponCode: string;

            /**
             * The link to this cost of engagement object.
             */
            href: string;

            /**
             * A coupon code that can be applied to the visit for discounts.
             */
            proposedCouponCode: string;

            /**
             * Text to be displayed if deferred billing is enabled.
             */
            deferredBillingText: string;

            /**
             * Text to be displayed while doing wrap up if deferred billing is enabled.
             */
            deferredBillingWrapUpText: string;

            /**
             * The cost value of an extension with the provider.
             */
            extensionCost: number;

            /**
             * The base cost of the visit for this provider without fees or copay.
             */
            baseCost: number;

            /**
             * Boolean TRUE if this is a visit with a cost of zero, false otherwise.
             */
            zeroCostVisit: boolean;

            /**
             * Boolean TRUE if the total cost of this visit is waived, false otherwise.
             */
            totalCostWaived: boolean;

            /**
             * Text to be displayed when asking for payment info.
             */
            paymentMessage: string;

            /**
             * The amount that the consumer is expected to pay as copay for a visit.
             */
            expectedConsumerCopayCost: number;

            /**
             * Boolean TRUE if this visit allows coupoun codes to be applied to it.
             */
            canApplyCouponCode: boolean;

            /**
             * Boolean TRUE if deferred billing is in effect.
             */
            deferredBillingInEffect: boolean;

            /**
             * Boolean TRUE if the cost of the visit has changed due to a transfer, false otherwise.
             */
            hasCostChangedWithVisitTransfer: boolean;

            /**
             * Text represents the status of the eligibility request.
             */
            eligibilityRequestStatus: AWSDKEligibilityRequestStatus;

            /**
             * Text representing a suggestion in case of eligibility request error.
             */
            eligibilityRequestErrorSuggestion: AWSDKEligibilitySuggestedResponse;

            /**
             * Text representing the error message to an eligibility request.
             */
            eligibilityRequestError: string;

            /**
             * Text representing an explanation for the reason why an eligibility request threw an error.
             */
            eligibilityExceptionReason: string;

        }

        /**
         * This class represents a medical diagnosis made by the {@link AWSDKProvider} about a condition that he/she believes is afflicting the {@link AWSDKConsumer}.
         */
        class AWSDKVisitDiagnosis extends AWSDKDataObject {
            /**
             * This class represents a medical diagnosis made by the {@link AWSDKProvider} about a condition that he/she believes is afflicting the {@link AWSDKConsumer}.
             */
            constructor();

            /**
             * The description of the diagnosis.
             */
            description: string;

            /**
             * The priority of the diagnosis. 0 is the highest priority.
             */
            priority: number;

            /**
             * The medical code for this diagnosis.
             */
            code: string;

            /**
             * The displayName for this diagnosis.
             */
            displayName: string;

        }

        /**
         * The AWSDKVisitExtension class represents a visit extension object.
         */
        class AWSDKVisitExtension extends AWSDKDataObject {
            /**
             * The AWSDKVisitExtension class represents a visit extension object.
             */
            constructor();

            /**
             * The cost amount of this extension.
             */
            extensionCost: number;

            /**
             * The amount of time to the visit this extension represents.
             */
            extensionTime: number;

            /**
             * The link url to this extension object.
             */
            href: string;

            /**
             * String representation of an enum with values: NONE, WITH_NO_COPAY, WITH_COPAY.
             */
            engagementExtendedType: string;

        }

        /**
         * Enum for AWSDKVisitModalityType.
         */
        enum AWSDKVisitModalityType {
            /**
             * Video modality type.
             */
            VIDEO = 'VIDEO',
            /**
             * Phone modality type.
             */
            PHONE = 'PHONE',
        }

        /**
         * This class describes a procedure done, or to be done, to the {@link AWSDKConsumer}.
         */
        class AWSDKVisitProcedure extends AWSDKDataObject {
            /**
             * This class describes a procedure done, or to be done, to the {@link AWSDKConsumer}.
             */
            constructor();

            /**
             * The description of the procedure.
             */
            description: string;

            /**
             * The priority of the procedure. 0 is the highest priority.
             */
            priority: number;

            /**
             * Boolean TRUE if the procedure is billable.
             */
            isBillable: boolean;

            /**
             * Any additional data for the procedure.
             */
            modifiers: string;

            /**
             * The medical code for this procedure.
             */
            code: string;

            /**
             * The displayName for this procedure.
             */
            displayName: string;

        }

        /**
         * A simplified representation of an {@link AWSDKVisit} that has already occurred.
         */
        class AWSDKVisitReport extends AWSDKEntity {
            /**
             * A simplified representation of an {@link AWSDKVisit} that has already occurred.
             */
            constructor();

            /**
             * The disposition of the visit.
             */
            disposition: AWSDKDisposition;

            /**
             * The schedule of the visit.
             */
            schedule: AWSDKVisitScheduled;

            /**
             * The name of the member in the visit.
             */
            memberName: string;

            /**
             * The name of the provider in the visit.
             */
            providerName: string;

            /**
             * The speciality of the provider in the visit.
             */
            providerSpecialty: AWSDKProviderType;

            /**
             * Whether or not the visit has been completed.
             */
            completed: boolean;

            /**
             * The name of the visit's member proxy, if any.
             */
            memberProxyName: string;

            /**
             * A timestamp representing the actual start time of the visit.
             */
            date: string;

            /**
             * The consumer's preferred phone number for this visit.
             */
            initiatorEngagementOverridePhone: string;

            /**
             * The consumer's preferred formatted phone number for this visit.
             */
            formattedInitiatorEngagementOverridePhone: string;

            /**
             * The reason for ending the visit.
             */
            endReason: AWSDKEndReason;

            /**
             * Represents the modality associated with the visit.
             */
            modality: AWSDKModality;

        }

        /**
         * A detailed representation of an {@link AWSDKVisit} that has already occurred.
         */
        class AWSDKVisitReportDetail extends AWSDKDataObject {
            /**
             * A detailed representation of an {@link AWSDKVisit} that has already occurred.
             */
            constructor();

            /**
             * The title of the visitReport.
             */
            title: string;

            /**
             * An array of string names of the disclaimers the consumer has accepted.
             */
            acceptedDisclaimers: string[];

            /**
             * The name of the provider this consumer was transferred from.
             */
            transferredFromProviderName: string;

            /**
             * The specialty of the provider this consumer was transferred from.
             */
            transferredFromSpecialty: string;

            /**
             * The transfer note.
             */
            transferNote: string;

            /**
             * The consumer's billing address.
             */
            consumerBillingAddress: AWSDKAddress;

            /**
             * The payment type.
             */
            paymentType: string;

            /**
             * The payment amount.
             */
            paymentAmount: number;

            /**
             * The coupon code applied to the visit.
             */
            couponCode: string;

            /**
             * The consumer summary topics picked for the visit.
             */
            consumerSummaryTopics: AWSDKTopic[];

            /**
             * The visit rating.
             */
            visitRating: number;

            /**
             * The provider rating.
             */
            providerRating: number;

            /**
             * The chat report for the visit.
             */
            chatReport: AWSDKChatReport;

            /**
             * The intake for the visit.
             */
            intake: AWSDKIntake;

            /**
             * The schedule of the visit.
             */
            schedule: AWSDKVisitScheduled;

            /**
             * The assigned provider of the visit.
             */
            assignedProvider: AWSDKProvider;

            /**
             * The triage questions associated with the visit.
             */
            triageQuestions: AWSDKTriageQuestion[];

            /**
             * The provider entries associated with the visit.
             */
            providerEntries: AWSDKProviderEntries;

            /**
             * The pharmacy associated with the visit.
             */
            pharmacy: AWSDKPharmacy;

            /**
             * The consumer associated with the visit.
             */
            consumer: AWSDKConsumer;

            /**
             * Vontains details about the visit's cost.
             */
            visitCost: AWSDKVisitCost;

            /**
             * Indicates if the associated visit has a Suppress Payment cost.
             */
            isSuppressChargeTimeout: boolean;

            /**
             * The disposition of the visit.
             */
            disposition: AWSDKDisposition;

            /**
             * The reason for ending the visit.
             */
            endReason: AWSDKEndReason;

            /**
             * Represents the modality associated with the visit @since 1.2.0.
             */
            modality: AWSDKModality;

        }

        /**
         * A wrapper around a collection of {@link AWSDKVisitReport}s.
         */
        class AWSDKVisitReportList extends AWSDKDataObject {
            /**
             * A wrapper around a collection of {@link AWSDKVisitReport}s.
             */
            constructor();

            /**
             * A collection of {@link AWSDKVisitReport}s.
             */
            visitReports: any[];

        }

        /**
         * This class represents a prescription that was prescribed during a visit.
         */
        class AWSDKVisitRx extends AWSDKEntity {
            /**
             * This class represents a prescription that was prescribed during a visit.
             */
            constructor();

            /**
             * The description of the prescription.
             */
            description: string;

            /**
             * The date by which to create the prescription.
             */
            createDate: Date;

            /**
             * Boolean TRUE if prescription is to be dispensed as written.
             */
            isDispenseAsWritten: boolean;

            /**
             * Boolean TRUE if prescription as needed.
             */
            isAsNeeded: boolean;

            /**
             * Boolean TRUE if the prescription is to be stoped when directed.
             */
            isStopWhenDirected: boolean;

            /**
             * The dosage of the prescription.
             */
            dosage: string;

            /**
             * The duration of the prescription.
             */
            duration: string;

            /**
             * The frequency of the prescription.
             */
            frequency: string;

            /**
             * The instructions for the prescription.
             */
            instructions: string;

            /**
             * Any additional instructions for the prescription.
             */
            additionalInstructions: string;

            /**
             * A pharmacy note.
             */
            pharmacyNote: string;

            /**
             * The quantity of the prescription.
             */
            quantity: string;

            /**
             * The number of refills for the prescription.
             */
            refills: number;

            /**
             * The measurement unit qualifier.
             */
            measurementUnitQualifier: string;

            /**
             * Boolean TRUE if has been reported.
             */
            isHasBeenReported: boolean;

            /**
             * Instructions for the prescription.
             */
            rxInstructions: string;

        }

        /**
         * This class represents a scheduled visit.
         */
        class AWSDKVisitScheduled extends AWSDKEntity {
            /**
             * This class represents a scheduled visit.
             */
            constructor();

            /**
             * The scheduled start time.
             */
            scheduledStartTime: number;

            /**
             * The appointment's actual start time.
             */
            actualStartTime: number;

            /**
             * The alloted duration for the visit in millisenconds.
             */
            allotedDurationMs: number;

            /**
             * The alloted extension duration for the visit.
             */
            allotedExtensionDurationMins: number;

            /**
             * Boolean TRUE if this was a scheduled visit, false otherwise.
             */
            isScheduled: boolean;

            /**
             * The pre-visit start time as a long timestamp.
             */
            initialPreVisitStartTime: number;

            /**
             * The post-visit start time as a long timestamp.
             */
            postVisitStartTime: number;

            /**
             * The post-visit end time as a long timestamp.
             */
            postVisitEndTime: number;

            /**
             * The appointment's waiting room entry time as a long timestamp.
             */
            waitingRoomEntryTime: number;

            /**
             * The amount of free time the provider has after a visit and before a next visit or a visit can be scheduled in milliseconds.
             */
            allotedBufferMs: number;

            /**
             * The wait duration in seconds.
             */
            waitDurationSecs: number;

            /**
             * The length of the actual visit in milliseconds.
             */
            actualDurationMs: number;

            /**
             * The time the event was cancelled as a long timestamp.
             */
            cancelledEventTime: number;

        }

        /**
         * This class represents the search criteria for finding a visit.
         * Get an instance of this via {@link VisitService#getNewVisitSearchCriteria()|VisitService.getNewVisitSearchCriteria}.
         */
        class AWSDKVisitSearchCriteria {
            /**
             * This class represents the search criteria for finding a visit.
             * Get an instance of this via {@link VisitService#getNewVisitSearchCriteria()|VisitService.getNewVisitSearchCriteria}.
             */
            constructor();

            /**
             * The start date of the visit to filter by.
             */
            startDate: Date;

            /**
             * The end date of the visit to filter by.
             */
            endDate: Date;

            /**
             * The source id of the visit to filter by.
             */
            sourceId: string;

            /**
             * The list of dispositions to filter by.
             */
            dispositions: AWSDKDisposition[];

            /**
             * The max results to return.
             */
            maxResults: number;

        }

        /**
         * This interface represents a partially-populated search criteria for finding a visit.
         *
         * An object implementing this can be passed in to {@link VisitService#getNewVisitSearchCriteria()|VisitService#getNewVisitSearchCriteria} to create a new {@link AWSDKVisitSearchCriteria} instance.
         */
        interface AWSDKPartialVisitSearchCriteria {
            /**
             * The start date of the visit to filter by.
             */
            startDate?: Date;

            /**
             * The end date of the visit to filter by.
             */
            endDate?: Date;

            /**
             * The source id of the visit to filter by.
             */
            sourceId?: string;

            /**
             * The list of dispositions to filter by.
             */
            dispositions?: AWSDKDisposition[];

            /**
             * The max results to return.
             */
            maxResults?: number;
        }

        /**
         * The visit summary, that is the 'wrapUp'.
         */
        class AWSDKVisitSummary extends AWSDKEntity {
            /**
             * The visit summary, that is the 'wrapUp'.
             */
            constructor();

            /**
             * Any restrictions the state might enforce over the prescription.
             */
            formularyRestriction: AWSDKStateFormularyRestriction;

            /**
             * The question to be presented to consumer for feedback.
             */
            consumerFeedbackQuestion: AWSDKConsumerFeedbackQuestion;

            /**
             * An array of {@link AWSDKTriageQuestion} with Q&A presented to consumer during triage.
             */
            triageQuestions: AWSDKTriageQuestion[];

            /**
             * Represents information entered by provider during visit: notes, diagnoses, prescriptions, etc.
             */
            providerEntries: AWSDKProviderEntries;

            /**
             * Contains details about the Visit's cost.
             */
            visitCost: AWSDKVisitCost;

            /**
             * The pharmacy to send prescriptions to.
             */
            pharmacy: AWSDKPharmacy;

            /**
             * The address to ship prescriptions to.
             */
            shippingAddress: AWSDKAddress;

            /**
             * The assigned {@link AWSDKProvider} for the visit.
             */
            assignedProvider: AWSDKProviderDetails;

            /**
             * Represents an individual acting on the {@link AWSDKProvider}'s behalf.
             */
            providerProxy: AWSDKProviderDetails;

            /**
             * Represents the {@link AWSDKConsumer} who had the visit.
             */
            consumer: AWSDKConsumer;

            /**
             * Represents the {@link AWSDKConsumer}'s parent.
             */
            consumerProxy: AWSDKConsumer;

            /**
             * The {@link AWSDKConsumer}'s state location.
             */
            consumerLocation: AWSDKState;

            /**
             * The name of the practice for which the {@link AWSDKProvider|AWSDKConsumer} is affiliated with.
             */
            practiceName: string;

            /**
             * An array of emails for any guests who were invited via email.
             */
            inviteEmails: string[];

            /**
             * Contains schedule information about the visit.
             */
            schedule: AWSDKVisitScheduled;

            /**
             * The HIPAA notice text which must be accepted in order to send visit summary via email.
             */
            hipaaNoticeText: string;

            /**
             * Additional HIPAA terms which must be accepted in order to send visit summary via email.
             */
            additionalHipaaNoticeText: string;

            /**
             * The consumer's preferred phone number for this visit.
             */
            initiatorEngagementOverridePhone: string;

            /**
             * The consumer's preferred formatted phone number for this visit.
             */
            formattedInitiatorEngagementOverridePhone: string;

            /**
             * The disposition of the visit.
             */
            disposition: AWSDKDisposition;

            /**
             * The reason for ending the visit.
             */
            endReason: AWSDKEndReason;

            /**
             * Represents the modality for the visit.
             */
            modality: AWSDKModality;

            /**
             * The intake completed for the visit.
             */
            intake: AWSDKIntake;

            proxies: any;

        }

        /**
         * This class represents the search criteria for finding a provider's future availability.
         * Get an instance of this via {@link ProviderService#getNewProviderFutureAvailabilitySearchCriteria()|ProviderService.getNewProviderFutureAvailabilitySearchCriteria}.
         */
        class AWSDKProviderFutureAvailabilitySearchCriteria {
            /**
             * This class represents the search criteria for finding a provider's future availability.
             * Get an instance of this via {@link ProviderService#getNewProviderFutureAvailabilitySearchCriteria()|ProviderService.getNewProviderFutureAvailabilitySearchCriteria}.
             */
            constructor();

            /**
             * The canonical time zone name, i.e. America/New_York.
             */
            timeZone: string;

            /**
             * The {@link AWSDKPractice} or {@link AWSDKPracticeSubCategory} whose details we want to retrieve.
             */
            practiceOrSubCategory: AWSDKPractice | AWSDKPracticeSubCategory;

            /**
             * The text used to filter the available dates by provider names.
             */
            searchTerm: string;

            /**
             * The {@link AWSDKLanguage} spoken to filter the available dates on.
             */
            languageSpoken: AWSDKLanguage;

            /**
             * The appointment date to filter the available dates on.
             */
            appointmentDate: Date;

            /**
             * The number of days past the specified appointment date to filter providers on.
             */
            limitInDays: number;

            /**
             * Limit the number of results returned. Should be an integer.
             */
            maxResults: number;

        }

        /**
         * This service handles everything related to an {@link AWSDKAppointment} and supporting infrastructure.
         */
        class AppointmentService {
            /**
             * This service handles everything related to an {@link AWSDKAppointment} and supporting infrastructure.
             */
            constructor();

            /**
             * Retrieves a list of {@link AWSDKAppointment} objects pertaining to a {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} whose appointments to retrieve
             */
            getAppointments(consumer: AWSDKConsumer): Promise<AWSDKAppointment[]>;

            /**
             * This method will get an updated Appointment.
             * @param appointment is the object that was created by a call to caretalks.
             */
            getAppointment(appointment: AWSDKAppointment): Promise<AWSDKAppointment>;

            /**
             * Returns an array of {@link AWSDKReminderOption} that can be used when scheduling an appointment.
             */
            reminderOptions: AWSDKReminderOption;

            /**
             * Schedule an appointment for the given {@link AWSDKConsumer} with the given {@link mode.AWSDKProvider} at the given appointment date.
             * Retrieve the Provider's available dates via {@link ProviderService#findFutureAvailableProviders} or {@link ProviderService#getProviderAvailability}.
             * @param consumer the {@link AWSDKConsumer} to schedule the appointment for
             * @param provider the {@link AWSDKProvider} to schedule the appointment with
             * @param appointmentDate requested Date for appointment
             * @param phoneNumber contact phone number
             * @param consumerReminder a {@link AWSDKReminderOption} or valid value.
             * @param providerReminder a {@link AWSDKReminderOption} or valid value.
             */
            scheduleAppointment(consumer: AWSDKConsumer, provider: AWSDKProvider, appointmentDate: Date, phoneNumber?: string, consumerReminder?: AWSDKReminderOption | string, providerReminder?: AWSDKReminderOption | string): Promise<boolean>;

            /**
             * Schedule an appointment for the given {@link model.AWSDKConsumer} with the given {@link mode.AWSDKProvider} at the given appointment date.
             * Retrieve the Provider's available dates via {@link ProviderService#findFutureAvailableProviders} or {@link ProviderService#getProviderAvailability}.
             * @param {model.AWSDKConsumer} consumer the {@link model.AWSDKConsumer|AWSDKConsumer} to schedule the appointment for
             * @param {Object} options additional options, some required, for scheduling the visit
             * @param {model.AWSDKProvider} options.provider the {@link model.AWSDKProvider|AWSDKProvider} to schedule the appointment with
             * @param {Date} options.appointmentDate requested Date for appointment
             * @param {String} [options.phoneNumber] contact phone number
             * @param {model.AWSDKReminder|String} [options.consumerReminder] a {@link model.AWSDKReminderOption|AWSDKReminderOption} or valid value.
             * @param {model.AWSDKReminder|String} [options.providerReminder] a {@link model.AWSDKReminderOption|AWSDKReminderOption} or valid value.
             * @param {model.AWSDKVisit|model.AWSDKVisitReportDetail} [options.reconnectFromVisit] the {@link model.AWSDKVisit|AWSDKVisit} or {@link model.AWSDKVisitReportDetail|AWSDKVisitReportDetail} to use for reconnecting
             * @returns {Promise<boolean>} a promise that will resolve to a boolean indicating success
             * @since 2.3.0
             */
            schedule(consumer: AWSDKConsumer, options: {
                provider: AWSDKProvider;
                appointmentDate: Date;
                phoneNumber?: string;
                consumerReminder?: AWSDKReminderOption | string;
                providerReminder?: AWSDKReminderOption | string;
                reconnectFromVisit?: AWSDKVisit;
            }): Promise<boolean>;

            /**
             * Retrieves an {@link AWSDKAppointmentReadiness} object pertaining to a {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} whose appointment readiness to retrieve
             */
            getAppointmentReadiness(consumer: AWSDKConsumer): Promise<AWSDKAppointmentReadiness>;

            /**
             *
             * @deprecated use {@see AppointmentService#updateReadiness(appointmentReadinessRequest)|AppointmentService.updateReadiness(appointmentReadinessRequest)}
             * Updates the {@link AWSDKAppointmentReadiness} object pertaining to a {@link AWSDKConsumer}.
             * @param appointment the {@link AWSDKAppointment} to change the readiness for
             * @param techCheckPassed whether or not the tech check has been passed
             */
            updateAppointmentReadiness(appointment: AWSDKAppointment, techCheckPassed?: boolean): Promise<AWSDKAppointmentReadiness>;

            /**
             * Finds an {@link AWSDKAppointment} object for a given visit id.
             * @param consumer the {@link AWSDKConsumer} whose appointment to retrieve
             * @param visitId the visit id
             */
            findAppointment(consumer: AWSDKConsumer, visitId: string): Promise<AWSDKAppointment>;

            /**
             * Finds an {@link AWSDKAppointment} object for a given source id.
             * @param consumer the {@link AWSDKConsumer} whose appointment to retrieve
             * @param sourceId the source id
             */
            findAppointmentBySourceId(consumer: AWSDKConsumer, sourceId: string): Promise<AWSDKAppointment>;

            /**
             * Cancels a scheduled {@link AWSDKAppointment}.
             * @param appointment the {@link AWSDKAppointment} to cancel
             */
            cancelAppointment(appointment: AWSDKAppointment): Promise<boolean>;

            /**
             * Get an instance of {@link AWSDKAppointmentUpdateRequest} to use when updating an existing appointment.
             * @param
             */
            getNewAppointmentUpdateRequest(appointment: AWSDKAppointment): AWSDKAppointmentUpdateRequest;

            /**
             * Updates an appointment given an {@link AWSDKAppointmentUpdateRequest}.
             * @param appointmentUpdateRequest the {@link AWSDKAppointmentUpdateRequest} containing the update request
             */
            updateAppointment(appointmentUpdateRequest: AWSDKAppointmentUpdateRequest): Promise<boolean>;

            /**
             * This method returns an instance of the {@link AWSDKAppointmentReadinessRequest}.
             * @returns an instance of the appointment readiness request object
             */
            getNewAppointmentReadinessRequest(): AWSDKAppointmentReadinessRequest;

            /**
             * This method updates the appointment readiness for a given consumer.
             * @param consumer the consumer to update appointment readiness for
             * @param appointmentReadinessRequest the appointment readiness request
             */
            updateReadiness(consumer: AWSDKConsumer, appointmentReadinessRequest: AWSDKAppointmentReadinessRequest): Promise<AWSDKAppointmentReadiness>;

            /**
             * Call this method directly to validate the fields of an {@link AWSDKAppointmentReadinessRequest} before calling
             * {@see AppointmentService#updateAppointmentReadiness|updateAppointmentReadiness}. Please note that this method will be called whenever {@see AppointmentService#updateAppointmentReadiness|updateAppointmentReadiness}
             * is called.
             */
            validateAppointmentReadinessRequest(): AWSDKError[];

        }

        /**
         * This service handles everything related to authentication of a {@link AWSDKConsumer}.
         * Should be obtained from {@link awsdk.AWSDK#authenticationService|AWSDK.authenticationService}.
         */
        class AuthenticationService {
            /**
             * This service handles everything related to authentication of a {@link AWSDKConsumer}.
             * Should be obtained from {@link awsdk.AWSDK#authenticationService|AWSDK.authenticationService}.
             */
            constructor();

            /**
             * Authenticates a consumer with Amwell's Telehealth Platform using their credentials.
             * @param username - the username
             * @param password - the password
             * @param consumerAuthKey - the optional consumerAuthKey
             */
            authenticateConsumerWithUsername(username: string, password: string, consumerAuthKey?: string): Promise<AWSDKAuthentication>;

            /**
             * Authenticates a consumer with Amwell's Telehealth Platform using their consumerAuthKey.
             * @param token - the security token used for authenticating
             */
            authenticateMutualAuthWithToken(token: string): Promise<AWSDKAuthentication>;

            /**
             * Clear the stored authentication information for last authenticated user.
             * This essentially "logs out" the user.
             * This is a client-side method, there is no server communication.
             * @param consumer the consumer to log out
             * @throws if consumer is null or not an instance of {@link AWSDKConsumer} errorCode will be {@link AWSDKErrorCode.IllegalArgument|AWSDKErrorCode.IllegalArgument}
             */
            clearAuthentication(consumer: AWSDKConsumer): void;

            /**
             * Recover the consumer's user name.
             * if the username does not match the consumer's email address, an email with the username will be sent and a status of USERNAME_EMAILED will be returned.
             * if the username matches the consumer's email address, a status of EMAIL_RECOVERED with a redacted email address will be returned.
             * if the given lastName and dob do NOT correspond to an existing consumer's account, a status of USERNAME_EMAILED will still be returned, even though
             * no email is actually sent - no indication is given as to whether a given consumer account exists.
             * @param lastName the consumer's last name
             * @param dob the consumer's date of birth
             */
            recoverEmail(lastName: string, dob: Date): Promise<AWSDKRecoverEmail>;

            /**
             * Send an email with instructions to reset the consumer's password.
             * Returns TRUE even if these consumer details did not actually match an existing consumer account.
             * No indication is given as to whether a given consumer account exists.
             * @param email the consumer's email
             * @param lastName the consumer's last name
             * @param dob the consumer's date of birth
             */
            requestPasswordReset(email: string, lastName: string, dob: Date): Promise<boolean>;

            /**
             * Update the consumer's password.
             * @param accountId the consumer's account id
             * @param token the password reset token
             * @param password the new password
             */
            updatePassword(accountId: string, token: string, password: string): Promise<boolean>;

        }

        /**
         * This is the DeviceLiveStreamService class, which contains all necessary methods for device livestream.
         */
        class DeviceLiveStreamService {

            /**
             * This DeviceLiveStreamService class contains all necessary service methods for device livestream integration from the Amwell telehealth platform.
             * An instance of this class is obtained via a call to {@link awsdk.AWSDK#DeviceLiveStreamService|AWSDK.DeviceLiveStreamService}.
             */
            constructor();

            /**
             * This method returns the device pairing status, as well as if the device is connected to an online network such as WIFI or cellular.
             *
             * @param {AWSDKConsumer} consumer  {@link AWSDKConsumer} to retrieve the device pairing status for.
             * @param {AWSDKDeviceLiveStreamType} type device type.
             * @returns {Promise<AWSDKDevicePairingStatus|error.AWSDKError>} a promise that resolves to a {@link AWSDKDevicePairingStatus|AWSDKDevicePairingStatus} or is rejected with a {@link error.AWSDKError|AWSDKError}
             */
            getDevicePairingStatus(consumer: AWSDKConsumer, type: AWSDKDeviceLiveStreamType): Promise<AWSDKDevicePairingStatus>;

            /**
             * Build the QR Code string optionally based on the user's network SSID and SSID Password.
             *
             * @param {AWSDKConsumer} consumer the consumer to build the QR Code for
             * @param {Object} options additional parameters for building the QR Code
             * @param {AWSDKDeviceLiveStreamType} options.type the type of the device to generate the QR code for
             * @param {String} [options.SSID] the SSID for the network the device is on
             * @param {String} [options.SSIDPassword] the SSID Password for the network the device is on
             * @returns {Promise<AWSDKDevicePairingStatus|error.AWSDKError>} a promise that resolves to a {@link AWSDKDevicePairingStatus|AWSDKDevicePairingStatus} or is rejected with a {@link error.AWSDKError|AWSDKError}
             */
            buildQRCodeString(consumer: AWSDKConsumer, options: {
                type: AWSDKDeviceLiveStreamType,
                SSID?: string,
                SSIDPassword?: string,
            }): Promise<string>;

            /**
             * A convenience function that generates and appends a QR Code to a provided HTMLElement.
             *
             * @param {AWSDKConsumer} consumer {@link AWSDKConsumer|AWSDKConsumer} the QR code will be associated with.
             * @param {Object} options additional parameters for building the QR Code
             * @param {AWSDKDeviceLiveStreamType} options.type the type of the device to generate the QR code for
             * @param {String} [options.SSID] the SSID for the network the device is on
             * @param {String} [options.SSIDPassword] the SSID Password for the network the device is on
             * @param {HTMLElement} options.container the HTML Element to append the generated QRCode to
             * @returns {Promise<String|error.AWSDKError>} a promise that resolves to a {String} or is rejected with a {@link error.AWSDKError|AWSDKError}
             */
            appendQRCode(consumer, options: {
                type: AWSDKDeviceLiveStreamType,
                container: HTMLElement,
                SSID?: string,
                SSIDPassword?: string,
            }): Promise<boolean>;

            /**
             * This is a helper method to retrieve a string that required to generate the QR code, to be scanned by the device.
             * @param {AWSDKConsumer} consumer the {@link AWSDKConsumer} the QR code will be associated with.
             * @param {String} ssId SSID for the WiFi network
             * @param {String} ssIdPwd password for the WiFi network
             * @param {AWSDKDeviceLiveStreamType} device type.
             * @returns {Promise<String>} a Promise that resolves to a {String} or is rejected with a {@link AWSDKError|AWSDKError}
             * @deprecated please use {@link DeviceLiveStreamService#buildQRCodeString|buildQRCodeString} instead.
             */
            // @ts-ignore
            retrieveQRCode(consumer: AWSDKConsumer, ssId?: string, ssIdPwd?: string, type: AWSDKDeviceLiveStreamType): Promise<string>;

            /**
             * This is a helper method used to build the QR code inside the given DOM element that will be scanned by the device.
             * @param {AWSDKConsumer} consumer the {@link AWSDKConsumer} the QR code will be associated with.
             * @param {String} ssId SSID for the WiFi network
             * @param {String} ssIdPwd password for the WiFi network
             * @param {HTMLElement} qrcodeContainer the DOM element which the QR code should be populated.
             * @param {AWSDKDeviceLiveStreamType} device type.
             * @returns {Promise<boolean>} a Promise that resolves to a {boolean} or is rejected with a {@link AWSDKError|AWSDKError}
             * @deprecated please use {@link DeviceLiveStreamService#appendQRCode|appendQRCode} instead.
             */
            // @ts-ignore
            buildQRCodeObject(consumer: AWSDKConsumer, ssId?: string, ssIdPwd?: string, qrcodeContainer: HTMLElement, type: AWSDKDeviceLiveStreamType): Promise<boolean>;
        }

        /**
         * This service handles everything related to a {@link AWSDKConsumer} and supporting infrastructure.
         */
        class ConsumerService {
            /**
             * This service handles everything related to a {@link AWSDKConsumer} and supporting infrastructure.
             */
            constructor();

            /**
             * Retrieve the {@link AWSDKConsumer} details for the given consumer, via {@link AWSDKAuthentication}
             * retrieved via {@link AuthenticationService#authenticateConsumerWithUsername|AuthenticationService.authenticateConsumerWithUsername} or {@link AuthenticationService#authenticateMutualAuthWithToken|AuthenticationService.authenticateMutualAuthWithToken}.
             * You must make sure {@link AWSDKAuthentication#needsToCompleteRegistration} is false for this to
             * succeed.  If it's TRUE you must call {@link ConsumerService#completeRegistration}.
             * @param authentication REQUIRED
             */
            getConsumer(authentication: AWSDKAuthentication): Promise<AWSDKConsumer>;

            /**
             * Retrieve the updated {@link AWSDKConsumer} details for the given consumer.
             * @param consumer the consumer whose updated information we are retrieving
             */
            getUpdatedConsumer(consumer: AWSDKConsumer): Promise<AWSDKConsumer>;

            /**
             * Get an instance of {@link AWSDKConsumerRegistration} to use for registering a new consumer.
             * The {@link AWSDKConsumerRegistration} object obtained here can be validated by an (optional) call to the {@link ConsumerService#validateRegistration|validateRegistration} directly or
             * indirectly via a call to {@link ConsumerService#registerConsumer|registerConsumer} which will always validate it.
             */
            newConsumerRegistration(): AWSDKConsumerRegistration;

            /**
             * Get an instance of {@link AWSDKConsumerUpdate} to use for updating an existing consumer.
             * The {@link AWSDKConsumerUpdate} object obtained here can be validated by an (optional) call to the {@link ConsumerService#validateConsumerUpdate|validateConsumerUpdate} directly or
             * indirectly via a call to {@link ConsumerService#updateConsumer|updateConsumer} which will always validate it.
             */
            newConsumerUpdate(): AWSDKConsumerUpdate;

            /**
             * Get an instance of {@link AWSDKConsumerOverrideDetails} to use when providing consumer data during cart-based visits.
             * The {@link AWSDKConsumerOverrideDetails} object obtained here can be validated by an (optional) call to the {@link ConsumerService#validateConsumerOverrideDetails(AWSDKConsumerOverrideDetails)|validateConsumerOverrideDetails(AWSDKConsumerOverrideDetails)}.
             * @deprecated please use {@link VisitService#newConsumerOverrideDetails()|newConsumerOverrideDetails()}
             */
            newConsumerOverrideDetails(): AWSDKConsumerOverrideDetails;

            /**
             * Get an instance of {@link AWSDKDependentRegistration} to use for registering a new dependent.
             * The {@link AWSDKDependentRegistration} object obtained here can be validated by an (optional) call to the {@link ConsumerService#validateDependentRegistration(AWSDKDependentRegistration)|validateDependentRegistration(dependentRegistration)} directly or
             * indirectly via a call to {@link ConsumerService#registerDependent(AWSDKDependentRegistration)|registerConsumer(consumerRegistration)} which will always validate it.
             */
            newDependentRegistration(): AWSDKDependentRegistration;

            /**
             * Get an instance of {@link AWSDKDependentUpdate} to use for updating a dependent.
             * The {@link AWSDKDependentUpdate} object obtained here can be validated by an (optional) call to the {@link ConsumerService#validateDependentUpdate(AWSDKDependentUpdate)|validateDependentUpdate(dependentUpdate)} directly or
             * indirectly via a call to {@link ConsumerService#updateDependent(AWSDKDependentUpdate)|updateDependent(dependentUpdate)} which will always validate it.
             */
            newDependentUpdate(): AWSDKDependentUpdate;

            /**
             * Get an instance of {@link AWSDKSubscriptionUpdate} to use for updating the subscription for a member.
             * The {@link AWSDKSubscriptionUpdate} object obtained here can be validated by an (optional) call to the {@link ConsumerService#validateSubscriptionUpdate(AWSDKSubscriptionUpdate, AWSDKConsumer)|validateSubscriptionUpdate(subscriptionUpdate, consumer)} directly or
             * indirectly via a call to {@link ConsumerService#updateInsuranceSubscription( AWSDKConsumer, AWSDKSubscriptionUpdate)|updateInsuranceSubscription(consumer, subscriptionUpdate)} which will always validate it.
             */
            newSubscriptionUpdate(): AWSDKSubscriptionUpdate;

            /**
             * Get an instance of {@link AWSDKSubscriptionUpdate} to use for updating the subscription for a member. This method is intended for use during the Visit intake flow.
             * Note: when in the context of a Visit, the "ignoreEligibilityChecks" flag on {@link AWSDKSubscriptionUpdate} is set to TRUE as the EDI checks happen during cost calculations.
             * The {@link AWSDKSubscriptionUpdate} object obtained here can be validated by an (optional) call to the {@link ConsumerService#validateSubscriptionUpdate(AWSDKSubscriptionUpdate, AWSDKConsumer)|validateSubscriptionUpdate(subscriptionUpdate, consumer)} directly or
             * indirectly via a call to {@link ConsumerService#updateInsuranceSubscription( AWSDKConsumer, AWSDKSubscriptionUpdate)|updateInsuranceSubscription(consumer, subscriptionUpdate)} which will always validate it.
             */
            newVisitSubscriptionUpdate(): AWSDKSubscriptionUpdate;

            /**
             * Retrieve the registration disclaimer {@link AWSDKDisclaimer}.
             * Show this to the consumer before registration and record whether or not they accepted it.
             */
            getRegistrationDisclaimer(): Promise<AWSDKDisclaimer>;

            /**
             * Validate the {@link AWSDKConsumerRegistration} object
             * Potential validation errors:
             * <p><table summary="validation" border="1">
             * <tr>
             * <th>Field</th>
             * <th>Validation Reason</th>
             * <th>Notes</th>
             * </tr>
             * <tr>
             * <td>legalResidence</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>legalResidence</td>
             * <td>invalid field value</td>
             * <td>Value must be in the list of supported state codes for a legal residence</td>
             * </tr>
             * <tr>
             * <td>email</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>email</td>
             * <td>invalid field format</td>
             * <td>At least 5 chars long, and valid email pattern</td>
             * </tr>
             * <tr>
             * <td>phone</td>
             * <td>invalid field format</td>
             * <td>Must have format '[\\+]?[0-9.-]+' </td>
             * </tr>
             * <tr>
             * <td>address</td>
             * <td>field required</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE</td>
             * </tr>
             * <tr>
             * <td>address1</td>
             * <td>field required</td>
             * <td>Only required if {@link AWSDKSystemConfiguration.consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE</td>
             * </tr>
             * <tr>
             * <td>address1</td>
             * <td>invalid field format</td>
             * <td>If required, then must be at least 1 char long</td>
             * </tr>
             * <tr>
             * <td>address2</td>
             * <td>invalid field format</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE. Can be null, but if not, must be at least 1 char long</td>
             * </tr>
             * <tr>
             * <td>city</td>
             * <td>field required</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE</td>
             * </tr>
             * <tr>
             * <td>city</td>
             * <td>invalid field format</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE. At least 2 char long</td>
             * </tr>
             * <tr>
             * <td>stateCode</td>
             * <td>field required</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE</td>
             * </tr>
             * <tr>
             * <td>stateCode</td>
             * <td>invalid field value</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE. If so, Value must be in the list of supported state codes for address.</td>
             * </tr>
             * <tr>
             * <td>countryCode</td>
             * <td>field required</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} and {@link AWSDKSystemConfiguration#isMultiCountry|AWSDKSystemConfiguration.isMultiCountry} is TRUE</td>
             * </tr>
             * <tr>
             * <td>countryCode</td>
             * <td>invalid field value</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} and {@link AWSDKSystemConfiguration#isMultiCountry|AWSDKSystemConfiguration.isMultiCountry} is TRUE. If so, Value must be in the list of supported country codes for address.</td>
             * </tr>
             * <tr>
             * <td>zipCode</td>
             * <td>field required</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE</td>
             * </tr>
             * <tr>
             * <td>zipCode</td>
             * <td>invalid field format</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE. If so, format must be: nnnnn or nnnnn-nnnn</td>
             * </tr>
             * <tr>
             * <td>hasAcceptedDisclaimer</td>
             * <td>wrong field value</td>
             * <td>must be TRUE to register</td>
             * </tr>
             * <tr>
             * <td>firstName</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>firstName</td>
             * <td>invalid field format</td>
             * <td>At least 1 char long</td>
             * </tr>
             * <tr>
             * <td>middleInitial</td>
             * <td>invalid field format</td>
             * <td>Only allowed if {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'INITIAL'. Can be blank or at most 1 character long. </td>
             * </tr>
             * <tr>
             * <td>middleName</td>
             * <td>invalid field format</td>
             * <td>Only allowed if {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'FULLNAME'. Can be blank or at most 100 characters long. </td>
             * </tr>
             * <tr>
             * <td>lastName</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>lastName</td>
             * <td>invalid field format</td>
             * <td>At least 2 chars long</td>
             * </tr>
             * <tr>
             * <td>gender</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>dob</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>dob</td>
             * <td>invalid field format</td>
             * <td>Must be valid date</td>
             * </tr>
             * <tr>
             * <td>sdkUserId</td>
             * <td>invalid field format</td>
             * <td>Must be a non-empty String</td>
             * </tr>
             * </table><p>
             * @param consumerRegistration object to validate
             * @throws if consumerRegistration is null or not an instance of {@link AWSDKConsumerRegistration} errorCode will be {@link AWSDKErrorCode.illegalArgument}
             * @throws if patientMrnId, phone, address2, or (depending on the value of {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling}) middleName, or middleInitial is not set to at least an empty string ( errorCode will be {@link AWSDKErrorCode.illegalArgument}
             */
            validateRegistration(consumerRegistration: AWSDKConsumerRegistration): AWSDKError[];

            /**
             * Validate the {@link AWSDKConsumerUpdate} object
             *Potential validation errors:
             * <p><table summary="validation" border="1">
             * <tr>
             * <th>Field</th>
             * <th>Validation Reason</th>
             * <th>Notes</th>
             * </tr>
             * <tr>
             * <td>email</td>
             * <td>invalid field format</td>
             * <td>At least 5 chars long, and valid email pattern</td>
             * </tr>
             * <tr>
             * <td>phone</td>
             * <td>invalid field format</td>
             * <td>Must have format '[\\+]?[0-9.-]+' </td>
             * </tr>
             * <tr>
             * <td>address1</td>
             * <td>invalid field format</td>
             * <td>If required, then must be at least 1 char long</td>
             * </tr>
             * <tr>
             * <td>address2</td>
             * <td>invalid field format</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE. Can be null, but if not, must be at least 1 char long</td>
             * </tr>
             * <tr>
             * <td>city</td>
             * <td>invalid field format</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE. At least 2 char long</td>
             * </tr>
             * <tr>
             * <td>zipCode</td>
             * <td>invalid field format</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE. If so, format must be: nnnnn or nnnnn-nnnn</td>
             * </tr>
             * <tr>
             * <td>stateCode</td>
             * <td>field required</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE</td>
             * </tr>
             * <tr>
             * <td>stateCode</td>
             * <td>invalid field value</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} is TRUE. If so, Value must be in the list of supported state codes for address.</td>
             * </tr>
             * <tr>
             * <td>countryCode</td>
             * <td>field required</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} and {@link AWSDKSystemConfiguration#isMultiCountry|AWSDKSystemConfiguration.isMultiCountry} is TRUE</td>
             * </tr>
             * <tr>
             * <td>countryCode</td>
             * <td>invalid field value</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#consumerAddressRequired|AWSDKSystemConfiguration.consumerAddressRequired} and {@link AWSDKSystemConfiguration#isMultiCountry|AWSDKSystemConfiguration.isMultiCountry} is TRUE. If so, Value must be in the list of supported country codes for address.</td>
             * </tr>
             * <tr>
             * <td>legalResidence</td>
             * <td>invalid field value</td>
             * <td>Value must be in the list of supported state codes for a legal residence</td>
             * </tr>
             * <tr>
             * <td>legalResidenceCountryCode</td>
             * <td>invalid field value</td>
             * <td>Value must be in the list of supported country codes for a legal residence</td>
             * </tr>
             * <tr>
             * <td>firstName</td>
             * <td>invalid field format</td>
             * <td>At least 1 char long</td>
             * </tr>
             * <tr>
             * <td>middleInitial</td>
             * <td>invalid field format</td>
             * <td>Only allowed if {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'INITIAL'. Can be blank or at most 1 character long. </td>
             * </tr>
             * <tr>
             * <td>middleName</td>
             * <td>invalid field format</td>
             * <td>Only allowed if {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'FULLNAME'. Can be blank or at most 100 characters long. </td>
             * </tr>
             * <tr>
             * <td>lastName</td>
             * <td>invalid field format</td>
             * <td>At least 2 chars long</td>
             * </tr>
             * <tr>
             * <td>dob</td>
             * <td>invalid field format</td>
             * <td>Must be valid date</td>
             * </tr>
             * <tr>
             * <td>sdkUserId</td>
             * <td>invalid field format</td>
             * <td>Must be a non-empty String</td>
             * </tr>
             * </table><p>
             * @param consumerUpdate object to validate
             */
            validateConsumerUpdate(consumerUpdate: AWSDKConsumerUpdate): AWSDKError[];

            /**
             * Validate the {@link AWSDKDependentRegistration} object
             * Potential validation errors:
             * <p><table summary="validation" border="1">
             * <tr>
             * <th>Field</th>
             * <th>Validation Reason</th>
             * <th>Notes</th>
             * </tr>
             * <tr>
             * <td>firstName</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>firstName</td>
             * <td>invalid field format</td>
             * <td>At least 1 char long</td>
             * </tr>
             * <tr>
             * <td>middleInitial</td>
             * <td>invalid field format</td>
             * <td>Only allowed if {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'INITIAL'. Can be blank or at most 1 character long. </td>
             * </tr>
             * <tr>
             * <td>middleName</td>
             * <td>invalid field format</td>
             * <td>Only allowed if {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'FULLNAME'. Can be blank or at most 100 characters long. </td>
             * </tr>
             * <tr>
             * <td>lastName</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>lastName</td>
             * <td>invalid field format</td>
             * <td>At least 2 chars long</td>
             * </tr>
             * <tr>
             * <td>gender</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>dob</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>dob</td>
             * <td>invalid field format</td>
             * <td>Must be valid date</td>
             * </tr>
             * <tr>
             * <td>sdkUserId</td>
             * <td>invalid field format</td>
             * <td>Must be a non-empty String</td>
             * </tr>
             * </table><p>
             * @param dependentRegistration object to validate
             */
            validateDependentRegistration(dependentRegistration: AWSDKDependentRegistration): AWSDKError[];

            /**
             * Validate the {@link AWSDKDependentUpdate} object
             * Potential validation errors:
             * <p><table summary="validation" border="1">
             * <tr>
             * <th>Field</th>
             * <th>Validation Reason</th>
             * <th>Notes</th>
             * </tr>
             * <tr>
             * <td>firstName</td>
             * <td>invalid field format</td>
             * <td>At least 1 char long</td>
             * </tr>
             * <tr>
             * <td>middleInitial</td>
             * <td>invalid field format</td>
             * <td>Only allowed if {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'INITIAL'. Can be blank or at most 1 character long. </td>
             * </tr>
             * <tr>
             * <td>middleName</td>
             * <td>invalid field format</td>
             * <td>Only allowed if {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'FULLNAME'. Can be blank or at most 100 characters long. </td>
             * </tr>
             * <tr>
             * <td>lastName</td>
             * <td>invalid field format</td>
             * <td>At least 2 chars long</td>
             * </tr>
             * <tr>
             * <td>dob</td>
             * <td>invalid field format</td>
             * <td>Must be valid date</td>
             * </tr>
             * <tr>
             * <td>sdkUserId</td>
             * <td>invalid field format</td>
             * <td>Must be a non-empty String</td>
             * </tr>
             * </table><p>
             * @param dependentUpdate object to validate
             */
            validateDependentUpdate(dependentUpdate: AWSDKDependentUpdate): AWSDKError[];

            /**
             * Register a new {@link AWSDKConsumer}
             * see {@link ConsumerService#validateRegistration(AWSDKConsumerRegistration)|validateRegistration(consumerRegistration)} for details on validation of registration fields
             * The given {@link AWSDKConsumer} will be authenticated.
             * @param consumerRegistration REQUIRED the {@link AWSDKConsumerRegistration} object with registration information about the {@link AWSDKConsumer}
             */
            registerConsumer(consumerRegistration: AWSDKConsumerRegistration): Promise<AWSDKConsumer>;

            /**
             * Complete the registration for a partially registered {@link AWSDKConsumer}.
             * @param authentication REQUIRED
             * @param legalResidenceState the two character State code (e.g. MA, ME, FL) REQUIRED
             * @param legalResidenceCountry the two character Country code (e.g. US)
             * @param newUsername the new username for the consumer REQUIRED
             * @param newPassword the new password for the consumer REQUIRED
             */
            completeRegistration(authentication: AWSDKAuthentication, legalResidenceState: string, legalResidenceCountry: string, newUsername: string, newPassword: string): Promise<boolean>;

            /**
             * Update an existing {@link AWSDKConsumer}.
             * @param consumer REQUIRED the {@link AWSDKConsumer} object that the {@link AWSDKConsumerUpdate} is being applied to
             * @param consumerUpdate REQUIRED the {@link AWSDKConsumerUpdate} object with update information about the {@link AWSDKConsumer}
             */
            updateConsumer(consumer: AWSDKConsumer, consumerUpdate: AWSDKConsumerUpdate): Promise<AWSDKConsumer>;

            /**
             * Register a new {@link AWSDKConsumer} dependent
             * see {@link ConsumerService#validateDependentRegistration(AWSDKDependentRegistration)|validateDependentRegistration(dependentRegistration)} for details on validation of registration fields.
             * @param parent REQUIRED the {@link AWSDKConsumer} object with parent information for the {@link AWSDKConsumer} dependent
             * @param dependentRegistration REQUIRED the {@link AWSDKDependentRegistration} object with registration information about the {@link AWSDKConsumer} dependent
             * @param performDependentCheck a boolean indicating whether or not there should be a check for existence of the {@link AWSDKDependent} we're trying to register <b>DEPRECATED: please use the property of the same name on AWSDKDependentRegistration</b>
             */
            registerDependent(parent: AWSDKConsumer, dependentRegistration: AWSDKDependentRegistration, performDependentCheck?: boolean): Promise<AWSDKConsumer>;

            /**
             * Update an existing {@link AWSDKConsumer} dependent
             * see {@link ConsumerService#validateDependentUpdate(AWSDKDependentUpdate)|validateDependentUpdate(dependentUpdate)} for details on validation of update-able fields.
             * @param dependent REQUIRED the {@link AWSDKConsumer} object that updates will be applied to
             * @param dependentUpdate REQUIRED the {@link AWSDKDependentUpdate} object containing the updates to {@link AWSDKConsumer} dependent
             */
            updateDependent(dependent: AWSDKConsumer, dependentUpdate: AWSDKDependentUpdate): Promise<AWSDKConsumer>;

            /**
             * This method retrieves a list of {@link AWSDKConsumer} objects associated with a given {@link AWSDKConsumer}, which represent his/her dependents.
             * @param consumer the {@link AWSDKConsumer} whose dependents we want to retrieve.
             * @returns a promise that will resolve to a list of dependents associated with the consumer or rejected with an instance of an {@link AWSDKError}.
             */
            getDependents(consumer: AWSDKConsumer): Promise<AWSDKConsumer[]>;

            /**
             * This method retrieves a notifications object for a {@link AWSDKConsumer}, which represents the user's upcoming appointments, outstanding dependent access requests, or unread secure messages.
             * @param consumer the {@link AWSDKConsumer} whose notifications we want to retrieve.
             * @returns a promise that will resolve to a {@link AWSDKNotifications} or rejected with an instance of an {@link AWSDKError}.
             */
            getNotifications(consumer: AWSDKConsumer): Promise<AWSDKNotifications>;

            /**
             * This method requests dependent access from one parent to another via email.
             * @param consumer the {@link AWSDKConsumer} who is requesting access to a dependent from another parent.
             * @param otherParentEmail the email address of the parent under which the dependent is currently registered
             * @returns a promise that will resolve to a boolean TRUE or rejected with an instance of an {@link AWSDKError}.
             */
            requestDependentAccess(consumer: AWSDKConsumer, otherParentEmail: string): Promise<boolean>;

            /**
             * This method gets the latest pending dependent access request made to the guardian of the dependent.
             * @param consumer the {@link AWSDKConsumer} the parent who is the guardian of the dependent
             * @returns a promise that will resolve to a {@link AWSDKDependentAccessRequest} or rejected with an instance of an {@link AWSDKError}.
             */
            getDependentAccessRequest(consumer: AWSDKConsumer): Promise<AWSDKDependentAccessRequest>;

            /**
             * This method accepts the latest pending dependent access request made to the guardian of the dependent.
             * @param consumer the {@link AWSDKConsumer} the parent who is the guardian of dependent.
             * @param accessRequest the {@link AWSDKDependentAccessRequest} the access request that guardian is accepting.
             * @param dependents the list of dependents that the guardian wishes to grant the requestor access to.
             * @returns a promise that will resolve to a boolean or rejected with an instance of an {@link AWSDKError}.
             */
            acceptDependentAccessRequest(consumer: AWSDKConsumer, accessRequest: AWSDKDependentAccessRequest, dependents: AWSDKConsumer[]): Promise<boolean>;

            /**
             * This method declines the latest pending access to dependent request made to the guardian of the dependent.
             * @param consumer the {@link AWSDKConsumer} the parent who is the guardian of the dependent.
             * @param accessRequest the {@link AWSDKDependentAccessRequest} the access request that guardian is declining.
             * @returns a promise that will resolve to a boolean or rejected with an instance of an {@link AWSDKError}.
             */
            declineDependentAccessRequest(consumer: AWSDKConsumer, accessRequest: AWSDKDependentAccessRequest): Promise<boolean>;

            /**
             * Upon retrieval, an instance of {@link AWSDKAuthentication} may contain a non-null value for
             * {@link AWSDKAuthentication#getOutstandingDisclaimer|AWSDKAuthentication.getOutstandingDisclaimer}, which signifies that the disclaimer has
             * been updated since the last time the Consumer accepted it.<p>
             * Call this method to confirm acceptance of the updated Consumer disclaimer.<p>
             * Be sure to test for a non-null value for {@link AWSDKAuthentication#getOutstandingDisclaimer|AWSDKAuthentication#getOutstandingDisclaimer}
             * before calling this method, or you will receive an IllegalArgumentException.<p>
             * @param consumer The {@link AWSDKConsumer} who is accepting any outstanding disclaimers
             */
            acceptOutstandingDisclaimer(consumer: AWSDKConsumer): Promise<AWSDKConsumer>;

            /**
             * Retrieves a {@link AWSDKVisitReportList} for a given consumer for visits that are in the dispositions of Completed, Expired or Deleted.
             * @param consumer The {@link AWSDKConsumer}
             * @param scheduledOnly Only retrieve reports for visits that were scheduled.
             * @param completedOnly Only retrieve reports for visits that were completed.
             * @param since Only retrieve reports for visits since a specific date.
             * @deprecated
             */
            getVisitReports(consumer: AWSDKConsumer, scheduledOnly?: boolean, completedOnly?: boolean, since?: string): Promise<AWSDKVisitReportList>;

            /**
             * Updates the medical conditions of a {@link AWSDKConsumer}.
             * @param consumer The {@link AWSDKConsumer} to update
             * @param conditions The array of {@link AWSDKCondition}
             */
            updateConditions(consumer: AWSDKConsumer, conditions: AWSDKCondition[]): Promise<AWSDKConsumer>;

            /**
             * Updates the {@link AWSDKVitals} for a given {@link AWSDKConsumer}.
             * @param consumer The {@link AWSDKConsumer} to update
             * @param vitals The {@link AWSDKVitals} of the consumer
             */
            updateVitals(consumer: AWSDKConsumer, vitals: AWSDKVitals): Promise<AWSDKConsumer>;

            /**
             * This method validates the fields in the {@link AWSDKVitals}.
             * Temperature values are expected to be in fahrenheit (f).
             * Weight values are expected to be pounds (lbs).
             * Diastolic and Systolic values  are expected to be in millimeters of mercury (mmHg).
             * @param vitals the vitals with updated information for validation
             */
            validateVitals(vitals: AWSDKVitals): AWSDKError[];

            /**
             * Retrieves a full list of {@link AWSDKCondition}s available in the system.
             * Conditions marked as 'current' are ones associated with the given {@link AWSDKConsumer}.
             * @param consumer The {@link AWSDKConsumer}
             */
            getConditions(consumer: AWSDKConsumer): Promise<AWSDKCondition[]>;

            /**
             * Retrieves the {@link AWSDKVitals} for a given {@link AWSDKConsumer}.
             * @param consumer The {@link AWSDKConsumer} to get the vitals for
             */
            getVitals(consumer: AWSDKConsumer): Promise<AWSDKConsumer>;

            /**
             * Get the current {@link AWSDKPaymentMethod} for the given {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} to use to fetch the payment on file
             */
            getPaymentMethod(consumer: any): Promise<AWSDKPaymentMethod>;

            /**
             * This method allows for a search of medications by name. It takes as argument a {@link AWSDKConsumer} and a free-form String text that represents the name of the medication being searched.
             * @param consumer the consumer who is authenticated at this particular point
             * @param medicationText the free form text representing the medication being searched. Needs to be a minimum of 3 char for search to be performed.
             */
            searchMedications(consumer: AWSDKConsumer, medicationText: string): Promise<AWSDKMedicationList>;

            /**
             * This service method allows callers to retrieve a list of medications ({@link AWSDKMedicationList}) pertaining to a {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} whose medications list we want to retrieve
             */
            getMedications(consumer: AWSDKConsumer): Promise<AWSDKMedicationList>;

            /**
             * This service allows a {@link AWSDKConsumer} to update their medications list.
             * @param consumer the {@link AWSDKConsumer} whose medications list we want to update
             * @param medications an array of medications representing the medications to be updated.
             */
            updateMedications(consumer: AWSDKConsumer, medications: AWSDKMedication[]): Promise<boolean>;

            /**
             * This method MUST be called before calling the {@link ConsumerService#updatePaymentMethod|updatePaymentMethod}.
             * After obtaining the {@link AWSDKPaymentRequest} object, fill out the desired fields ({@link ConsumerService#validatePaymentRequest|validatePaymentRequest} for
             * a description of desired fields) and call the {@link ConsumerService#updatePaymentMethod|updatePaymentMethod}
             * to update the consumer payment information.
             * @returns object which will include the payment information to update for the {@link AWSDKConsumer}
             */
            newPaymentRequest(): AWSDKPaymentRequest;

            /**
             * This method is used to update the payment information on file pertaining to a {@link AWSDKConsumer}. The caller of this method MUST call the {@link ConsumerService#newPaymentRequest|newPaymentRequest}
             * and fill the request form with new credit card information. Additionally, the caller can (optionally) validate the {@link AWSDKPaymentRequest} by explicitly calling {@link ConsumerService#validatePaymentRequest|validatePaymentRequest}.
             * The {@link AWSDKPaymentRequest} will ALWAYS be validated when calling this update method.
             * @param consumer the authenticated consumer whose payment information to update.
             * @param paymentRequest the completed payment request form
             */
            updatePaymentMethod(consumer: AWSDKConsumer, paymentRequest: AWSDKPaymentRequest): Promise<AWSDKPaymentMethod>;

            /**
             * This method validates the fields in the {@link AWSDKPaymentRequest}
             * Potential validation errors:
             * <p><table summary="validation" border="1">
             * <tr>
             * <th>Field</th>
             * <th>Validation Reason</th>
             * <th>Notes</th>
             * </tr>
             * <tr>
             * <td>nameOnCard</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>creditCardNumber</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>creditCardNumber</td>
             * <td>invalid field format</td>
             * <td></td>
             * </tr>
             * <tr>
             * <td>creditCardSecCode</td>
             * <td>field required</td>
             * <td>set to non-empty field</td>
             * </tr>
             * <tr>
             * <td>creditCardSecCode</td>
             * <td>invalid field format</td>
             * <td></td>
             * </tr>
             * <tr>
             * <td>address1</td>
             * <td>invalid field format</td>
             * <td>if non-empty, must be at least 1 char long</td>
             * </tr>
             * <tr>
             * <td>address1</td>
             * <td>required field</td>
             * <td>set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>address2</td>
             * <td>invalid field format</td>
             * <td>If non-empty, then must be at least 1 char long</td>
             * </tr>
             * <tr>
             * <td>city</td>
             * <td>invalid field format</td>
             * <td>if non-empty, must be at least 1 char long</td>
             * </tr>
             * <tr>
             * <td>city</td>
             * <td>required field</td>
             * <td>set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>stateCode</td>
             * <td>field required</td>
             * <td>set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>stateCode</td>
             * <td>invalid field value</td>
             * <td>Value must be in the list of supported state codes for address.</td>
             * </tr>
             * <tr>
             * <td>countryCode</td>
             * <td>field required</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#isMultiCountry|AWSDKSystemConfiguration.isMultiCountry} is TRUE</td>
             * </tr>
             * <tr>
             * <td>countryCode</td>
             * <td>invalid field value</td>
             * <td>Only required if {@link AWSDKSystemConfiguration#isMultiCountry|AWSDKSystemConfiguration.isMultiCountry} is TRUE. If so, Value must be in the list of supported country codes for address.</td>
             * </tr>
             * <tr>
             * <td>creditCardZip</td>
             * <td>invalid field format</td>
             * <td>format must be: nnnnn or nnnnn-nnnn</td>
             * </tr>
             * <tr>
             * <td>creditCardMonth</td>
             * <td>field required</td>
             * <td>set to non-empty field</td>
             * </tr>
             * <tr>
             * <td>creditCardMonth</td>
             * <td>invalid field format</td>
             * <td>number >= 1 and number <= 12. If in same year, this cannot be in the past</td>
             * </tr>
             * <tr>
             * <td>creditCardYear</td>
             * <td>field required</td>
             * <td>Set to non-empty value</td>
             * </tr>
             * <tr>
             * <td>creditCardYear</td>
             * <td>invalid field format</td>
             * <td>format: yyyy, Please note that year cannot be in the past/td>
             * </tr>
             * </table><p>
             * @param paymentRequest the payment request form with updated payment information for validation
             */
            validatePaymentRequest(paymentRequest: AWSDKPaymentRequest): AWSDKError[];

            /**
             * Returns an array of {@link AWSDKAllergy} for a given {@link AWSDKConsumer}. The allergies that are pertinent to
             * the current consumer have the property 'isCurrent' set to TRUE.
             * @param consumer the {@link AWSDKConsumer} whose allergies we are intersted in fetching
             */
            getAllergies(consumer: AWSDKConsumer): Promise<AWSDKAllergy[]>;

            /**
             * Returns a {@link AWSDKSubscription} for a given {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} whose insurance subscription we're interested in fetching
             */
            getInsuranceSubscription(consumer: AWSDKConsumer): Promise<AWSDKSubscription>;

            /**
             * Remove the existing {@link AWSDKSubscription} from the given {@link AWSDKConsumer}.
             * @param consumer the consumer whose insurance subscription should be removed
             */
            removeInsuranceSubscription(consumer: AWSDKConsumer): Promise<boolean>;

            /**
             * This method is used to update the insurance information on file pertaining to a {@link AWSDKConsumer}.
             * and fill the request form with new insurance information. If the 'ignoreEligibilityChecks' attribute on the
             * {@link AWSDKSubscriptionUpdate} is set to false this will automatically check for eligibility after updating.
             * @param consumer the consumer whose insurance subscription is being updated
             * @param subscriptionUpdate the completed insurance form
             */
            updateInsuranceSubscription(consumer: AWSDKConsumer, subscriptionUpdate: AWSDKSubscriptionUpdate): Promise<AWSDKSubscription>;

            /**
             * This method updates the list of known allergies for a given consumer.
             * @param consumer the {@link AWSDKConsumer} whose allergies list we want to update
             * @param allergies the list of allergies to update for the consumer
             */
            updateAllergies(consumer: AWSDKConsumer, allergies: AWSDKAllergy[]): Promise<boolean>;

            /**
             * This method validates the fields in the {@link AWSDKSubscriptionUpdate}.
             * @param subscriptionUpdate the subscription request form with updated subscription information for validation
             * @param consumer the consumer for whom subscription is being changed for
             */
            validateSubscriptionUpdate(subscriptionUpdate: AWSDKSubscriptionUpdate, consumer: AWSDKConsumer): AWSDKError[];

            /**
             * This method is used to add a service key to a {@link AWSDKConsumer}.
             * @param consumer the authenticated consumer that the service key will be added too.
             * @param serviceKey the service key to add
             */
            addServiceKey(consumer: AWSDKConsumer, serviceKey: string): Promise<AWSDKConsumer>;

            /**
             * Get the current {@link AWSDKHealthSummary} for the given {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} to use to fetch the payment on file
             */
            getHealthSummary(consumer: any): Promise<AWSDKHealthSummary>;

            /**
             * This service method allows the fetching of an image card from an {@link AWSDKHealthPlan}.
             * @param consumer the {@link AWSDKConsumer} subscribing to the health plan
             * @param healthPlan the insurance health plan to which the consumer is a subscriber and whose image card we seek to fetch.
             */
            getHealthPlanCardImage(consumer: AWSDKConsumer, healthPlan: AWSDKHealthPlan): Promise<Blob>;

            /**
             * This method fetches a {@link AWSDKVisitReport} for a consumer. The visit report is in PDF format and pertains to a previous visit
             * between this consumer and a given provider.
             * @param consumer the {@link AWSDKConsumer} whose visit report we want to fetch
             * @param visitReport the object representing a {@link AWSDKVisitReport} with links to its PDF resource
             * @deprecated use {@link ConsumerService#getVisitReportPDF} instead
             */
            getVisitReport(consumer: AWSDKConsumer, visitReport: AWSDKVisitReport): Promise<Blob>;

            /**
             * This method fetches a {@link AWSDKVisitReport} for a consumer. The visit report is in PDF format and pertains to a previous visit
             * between this consumer and a given provider.
             * @param consumer the {@link AWSDKConsumer} whose visit report we want to fetch
             * @param visitReport the object representing a {@link AWSDKVisitReport} with links to its PDF resource
             */
            getVisitReportPDF(consumer: AWSDKConsumer, visitReport: AWSDKVisitReport): Promise<Blob>;

            /**
             * This method fetches a {@link VisitReportDetail} for a consumer.
             * @param consumer the {@link AWSDKConsumer} whose visit report we want to fetch
             * @param visitReport the object representing a {@link AWSDKVisitReport} with links to its detail resource
             */
            getVisitReportDetail(consumer: AWSDKConsumer, visitReport: AWSDKVisitReport): Promise<AWSDKVisitReportDetail>;

            /**
             * This method allows a {@link AWSDKConsumer} to access all their health documents stored on the Amwell telehealth platform.
             * @deprecated
             */
            getHealthDocumentRecords(consumer: AWSDKConsumer, sortOrder?: AWSDKSortOrder): Promise<AWSDKHealthDocumentRecordList>;

            /**
             * This method allows the currently authenticated {@link AWSDKConsumer} to retrieve the attachment associated with the {@link AWSDKHealthDocumentRecord}.
             */
            getHealthDocumentRecordAttachment(consumer: AWSDKConsumer, healthDocRecord: AWSDKHealthDocumentRecord): Promise<Blob>;

            /**
             * This method allows the currently authenticated {@link AWSDKConsumer} to remove an existing {@link AWSDKHealthDocumentRecord} from consumer's health history.
             */
            removeHealthDocumentRecord(consumer: AWSDKConsumer, healthDocRecord: AWSDKHealthDocumentRecord): Promise<boolean>;

            /**
             * This method adds a health document record to the {@link AWSDKConsumer}'s files.
             */
            addHealthDocumentAttachment(consumer: AWSDKConsumer, data: Blob | File, fileName: string, visit?: AWSDKVisit, comment?: string): Promise<AWSDKHealthDocumentRecord>;

            /**
             * Get the current shipping {@link AWSDKAddress} for the given {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} whose shipping address to fetch
             */
            getShippingAddress(consumer: any): Promise<AWSDKAddress>;

            /**
             * Update the given {@link AWSDKConsumer}'s shipping address to the data provided in the given {@link AWSDKAddressUpdate} object.
             * @param consumer the consumer to update
             * @param shippingAddress the consumer's shipping address to update
             */
            updateShippingAddress(consumer: AWSDKConsumer, shippingAddress: AWSDKAddressUpdate): Promise<AWSDKAddress>;

            /**
             * Get an instance of {@link AWSDKAddressUpdate} to use for updating a consumer's shipping address.
             * @param address1 the first line of the address
             * @param address2 the second line of the address
             * @param city the city name
             * @param geographicalState the actual underlying {@link AWSDKState} of the address
             * @param zipCode the zip (postal) code for this physical location
             * @throws with an {@link AWSDKErrorCode.illegalArgument|AWSDKErrorCode.illegalArgument} if the state is not an instance of {@link AWSDKState}
             */
            newAddressUpdate(address1: string, address2: string, city: string, geographicalState: AWSDKState, zipCode: string): AWSDKAddressUpdate;

            /**
             * Checks whether a given field on a given consumer is considered protected (i.e. it's feed controlled).
             * @param consumer the consumer whose field to check
             * @param fieldName the name of the field on the consumer to check
             */
            isFieldProtected(consumer: AWSDKConsumer, fieldName: string): boolean;

            /**
             * This method validates the fields in the {@link AWSDKTrackerRequest}.
             * @param trackerRequest the tracker request to be validated
             */
            validateTrackerRequest(trackerRequest: AWSDKTrackerRequest): AWSDKError[];

            /**
             * Find all the trackers associated with a particular {@link AWSDKConsumer} that match the trackerTemplate uuid criteria.
             * @param consumer the {@link AWSDKConsumer} for whom we're seeking trackers for
             * @param trackersSearchCriteria the searchTrackers searchCriteria object to be used
             */
            searchTrackers(consumer: AWSDKConsumer, trackersSearchCriteria: AWSDKTrackersSearchCriteria): Promise<AWSDKTrackerEntry[]>;

            /**
             * Delete all the trackers associated with a particular {@link AWSDKConsumer} that match the search criteria.
             * @param consumer the {@link AWSDKConsumer} for whom we're deleting trackers for
             * @param trackerSearchCriteria the trackers search criteria to be used to delete tracker information
             */
            deleteTrackers(consumer: AWSDKConsumer, trackerSearchCriteria: AWSDKTrackersSearchCriteria): Promise<boolean>;

            /**
             * Add a tracker to a {@link AWSDKConsumer}'s profile.
             * @param consumer the consumer whose tracker we want to add
             * @param trackerRequest the request object used to add trackers for a given {@link AWSDKConsumer}. This object is obtained by a call to {@see ConsumerService#getNewTrackerRequest}.
             */
            addTracker(consumer: AWSDKConsumer, trackerRequest: AWSDKTrackerRequest): Promise<boolean>;

            /**
             * This method returns an instance of {@link AWSDKTrackerRequest} to be used for adding a tracker to a consumer's profile.
             * @returns an instance of {@link AWSDKTrackerRequest}
             */
            getNewTrackerRequest(): AWSDKTrackerRequest;

            /**
             * This method returns an instance of {@link AWSDKTrackerEntryRequest} to be used for adding a tracker entry to a tracker request.
             * @returns an instance of {@link AWSDKTrackerEntryRequest}
             */
            getNewTrackerEntryRequest(): AWSDKTrackerEntryRequest;

            /**
             * This method returns an instance of {@link AWSDKTrackerDataPointRequest} to be used for adding a tracker data point to a tracker entry request.
             * @returns an instance of {@link AWSDKTrackerDataPointRequest}
             */
            getNewTrackerDataPointRequest(): AWSDKTrackerDataPointRequest;

            /**
             * This method returns an instance of {@link AWSDKTrackersSearchCriteria} to be used to create search criteria for a {@link ConsumerService#searchTrackers} or {@link ConsumerService#deleteTrackers} request.
             * @param searchCriteria the search criteria object to be used
             * @returns an instance of {@link AWSDKTrackersSearchCriteria}
             */
            getNewTrackersSearchCriteria(searchCriteria: Object): AWSDKTrackersSearchCriteria;

            /**
             * Get an instance of {@link AWSDKExamDataRequest} to use when creating an exam data request for a device integration request.
             * @returns an instance of {@link AWSDKExamDataRequest}
             */
            getNewExamDataRequest(): AWSDKExamDataRequest;

            /**
             * Get an instance of {@link AWSDKDeviceIntegrationRequest} to use when adding device integration data.
             * @param examDataEntries the list of exam data entries associated with the device integration request
             */
            getNewDeviceIntegrationRequest(examDataEntries: AWSDKExamDataRequest[]): AWSDKDeviceIntegrationRequest;

            /**
             * This method validates the fields in the {@link AWSDKDeviceIntegrationRequest}.
             * @param deviceIntegrationRequest the device integration request to be validated
             */
            validateDeviceIntegrationRequest(deviceIntegrationRequest: AWSDKDeviceIntegrationRequest): AWSDKError[];

            /**
             * Updates the given {@link AWSDKConsumer}'s profile with the data provided in the given {@link AWSDKDeviceIntegrationRequest} object.
             * Also updates {@link AWSDKVisit} with the data provided in the given {@link AWSDKDeviceIntegrationRequest} object.
             * @param consumer the {@link AWSDKConsumer} associated with the device integration data request
             * @param deviceIntegrationRequest the {@link AWSDKDeviceIntegrationRequest}
             */
            addDeviceIntegrationData(consumer: AWSDKConsumer, deviceIntegrationRequest: AWSDKDeviceIntegrationRequest): Promise<boolean>;

            /**
             * Search {@link PostVisitFollowUpItem}s for a given {@link AWSDKConsumer}.
             * @param {AWSDKConsumer} consumer the {@link AWSDKConsumer} to search PostVisitFollowUpItems for
             * @param {Object} [options] the object containing search criteria and parameters
             * @param {number}  [options.pageSize] if provided will limit the pageSize to the value of the provided integer
             * @param {Date}  [options.startDate] if provided will return only items after the date
             * @param {Date}  [options.endDate] if provided will return only items before the date
             * @param {AWSDKPostVisitFollowUpItemsTypeFilter}  [options.type] if provided will return only items of the specified type
             * @param {boolean}  [options.resolved] if provided will filter items to only those with a matching resolved status
             */
            searchPostVisitFollowUpItems(consumer: AWSDKConsumer, options?: {
                resolved?: boolean,
                type?: AWSDKPostVisitFollowUpItemsTypeFilter,
                pageSize?: number,
                startDate?: Date,
                endDate?: Date,
            }): Promise<AWSDKPaginatedPostVisitFollowUpItems>;

            /**
             * request a list of a members unresolved follow ups
             * @param {AWSDKCOnsumer} consumer
             */
            getOnlineVisitFollowUpItems(consumer: AWSDKConsumer): Promise<AWSDKPaginatedOnlineVisitFollowUpItems>;

            /**
             * Mark an individual {@link AWSDKPostVisitFollowUpItem} as resolved.
             *
             * The resolved attribute on the {@link AWSDKPostVisitFollowUpItem} must be false.
             *
             * @param {AWSDKConsumer} consumer the {@link AWSDKConsumer} that owns the {@link AWSDKPostVisitFollowUpItem}.
             * @param {PostVisitFollowUpItem} postVisitFollowUpItem the {@link PostVisitFollowUpItem} to mark as resolved.
             */
            markPostVisitFollowUpItemResolved(consumer: AWSDKConsumer, postVisitFollowUpItem: AWSDKPostVisitFollowUpItem): Promise<boolean>;

            /**
             * Dismiss an individual {@link AWSDKOnlineVisitFollowUpItem}.
             *
             * @param {AWSDKConsumer} consumer the {@link AWSDKConsumer} that owns the {@link AWSDKOnlineVisitFollowUpItem}.
             * @param {AWSDKOnlineVisitFollowUpItem} onlineVisitFollowUpitem the {@link AWSDKOnlineVisitFollowUpItem} to dismiss.
             * @since 3.0.0
             */
            dismissOnlineVisitFollowUpItem(consumer: AWSDKConsumer, onlineVisitFollowUpitem: AWSDKOnlineVisitFollowUpItem): Promise<boolean>;

            /**
             * This method fetches a non-appointment {@link AWSDKPostVisitFollowUpItem} for a consumer in PDF format.
             *
             * @param consumer the {@link AWSDKConsumer} whose visit report we want to fetch.
             * @param postVisitFollowUpItem the object representing a non-appointment {@link AWSDKPostVisitFollowUpItem} with links to its PDF resource
             */
            getPostVisitFollowUpItemPDF(consumer: AWSDKConsumer, postVisitFollowUpItem: AWSDKPostVisitFollowUpItem): Promise<Blob>;

            /**
             * Search {@link AWSDKVisitReport}s for a given {@link AWSDKConsumer}.
             * @param {AWSDKConsumer} consumer the {@link AWSDKConsumer} to search AWSDKVisitReports for
             * @param {Object} [options] the object containing search criteria and parameters
             * @param {number}  [options.pageSize] if provided will limit the pageSize to the value of the provided integer
             * @param {Date}  [options.startDate] if provided will return only items after the date
             * @param {Date}  [options.endDate] if provided will return only items before the date
             * @param {AWSDKDisposition[]}  [options.dispositions] if provided will filter visit reports to only matching dispositions, otherwise will return only Completed visits
             * @param {boolean}  [options.scheduledOnly] if provided will filter visit reports to those for scheduled visits
             */
            searchVisitReports(consumer: AWSDKConsumer, options?: {
                scheduledOnly?: boolean,
                dispositions?: AWSDKDisposition[],
                pageSize?: number,
                startDate?: Date,
                endDate?: Date,
            }): Promise<AWSDKPaginatedVisitReports>;

            /**
             * Search {@link AWSDKHealthDocumentRecords}s for a given {@link AWSDKConsumer}.
             * @param {AWSDKConsumer} consumer the {@link AWSDKConsumer} to search AWSDKHealthDocumentRecords for
             * @param {Object} [options] the object containing search criteria and parameters
             * @param {number}  [options.pageSize] if provided will limit the pageSize to the value of the provided integer
             * @param {Date}  [options.startDate] if provided will return only items after the date
             * @param {Date}  [options.endDate] if provided will return only items before the date
             * @param {boolean}  [options.sortAsc] set to TRUE to sort the documents by uploadDate in ascending order. Defaults to descending order.
             */
            searchHealthDocumentRecords(consumer: AWSDKConsumer, options?: {
                sortAsc?: boolean,
                pageSize?: number,
                startDate?: Date,
                endDate?: Date,
            }): Promise<AWSDKPaginatedHealthDocumentRecords>;
        }

        /**
         * This service handles everything related to IVR (Interactive Voice Response) calls.
         */
        class IVRService {
            /**
             * This service handles everything related to IVR (Interactive Voice Response) calls.
             */
            constructor();

            /**
             * Initiates an IVR call between a {@link AWSDKConsumer} and a {@link AWSDKProvider}.
             * @param consumer the {@link AWSDKConsumer} initiating the call
             * @param provider the {@link AWSDKProvider} to call
             * @param overridePhoneNumber an optional phone number to override the consumer's phone number
             */
            initiateCall(consumer: AWSDKConsumer, provider: AWSDKProvider, overridePhoneNumber?: string): Promise<boolean>;

        }

        /**
         * This is the MedicationService class.
         */
        class MedicationService {
            /**
             * This is the MedicationService class.
             */
            constructor();

        }

        /**
         * This service handles everything related to an {@link AWSDKPharmacy} and supporting infrastructure.
         */
        class PharmacyService {
            /**
             * This service handles everything related to an {@link AWSDKPharmacy} and supporting infrastructure.
             */
            constructor();

            /**
             * Retrieves a list of {@link AWSDKPharmacy} objects pertaining to a {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} whose pharmacies to retrieve
             */
            getPharmaciesForConsumer(consumer: AWSDKConsumer): Promise<AWSDKPharmacy[]>;

            /**
             * Retrieves the preferred {@link AWSDKPharmacy} for the given {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} whose preferred pharmacy to retrieve
             */
            getPreferredPharmacy(consumer: AWSDKConsumer): Promise<AWSDKPharmacy>;

            /**
             * Updates the preferred {@link AWSDKPharmacy} for the given {@link AWSDKConsumer}.
             * @param consumer the {@link AWSDKConsumer} whose preferred pharmacy to update
             * @param pharmacy the preferred {@link AWSDKPharmacy}
             */
            updatePreferredPharmacy(consumer: AWSDKConsumer, pharmacy: AWSDKPharmacy): Promise<AWSDKConsumer>;

            /**
             * Search for {@link AWSDKPharmacy}s that meet the provided search criteria. At least one search criteria argument must be supplied.
             * @param city the city in which to search
             * @param state the state in which to search
             * @param zipCode the zipCode in which to search
             * @param pharmacyType the type of pharmacy to search for
             */
            getPharmacies(city?: string, state?: AWSDKState, zipCode?: string, pharmacyType?: string): Promise<AWSDKPharmacy[]>;

            /**
             * Search for {@link AWSDKPharmacy}s that are within the specified radius of the given longitude and latitude.
             * @param longitude the longitude component of the coordinates to search for
             * @param latitude the latitude component of the coordinates to search for
             * @param radius the max radius to consider (in miles)
             * @param excludeMailOrderPharmacies exclude mail order pharmacies from the search result
             */
            getPharmaciesByLongitudeAndLatitude(longitude: number, latitude: number, radius?: number, excludeMailOrderPharmacies?: boolean): Promise<AWSDKPharmacy[]>;

            /**
             * Delete the {@link AWSDKPharmacy}s from the given {@link AWSDKConsumer}'s account.
             * @param consumer the consumer whose pharmacy to delete
             * @param pharmacy the pharmacy to delete
             */
            deletePharmacy(consumer: AWSDKConsumer, pharmacy: AWSDKPharmacy): Promise<boolean>;

        }

        /**
         * This PracticeService class contains all necessary service methods for getting practice related information from the Amwell telehealth platform.
         * An instance of this class is obtained via a call to {@link awsdk.AWSDK#practiceService|AWSDK.practiceService}.
         */
        class PracticeService {
            /**
             * This PracticeService class contains all necessary service methods for getting practice related information from the Amwell telehealth platform.
             * An instance of this class is obtained via a call to {@link awsdk.AWSDK#practiceService|AWSDK.practiceService}.
             */
            constructor();

            /**
             * Retrieve an array of {@link AWSDKPractice} for the given {@link AWSDKConsumer}, which is retrieved via a call {@link ConsumerService#getConsumer|ConsumerService.getConsumer}.
             * The resulting response will also have an array of {@link AWSDKPracticeCategory}.
             * @param consumer the {@link AWSDKConsumer} whose list of practices we seek to retrieve
             */
            getPractices(consumer: AWSDKConsumer): Promise<AWSDKPracticeList>;

            /**
             * Retrieve the practice details for the given {@link AWSDKPractice}, which is retrieved via a call to {@link PracticeService#getPractices|PracticeService.getPractices}.
             * @param practice the {@link AWSDKPractice}, {@link AWSDKPracticeSearchResult}, or {@link AWSDKPracticeInfo} whose details we want to retrieve.
             */
            getPracticeDetails(practice: AWSDKPractice | AWSDKPracticeSearchResult | AWSDKPracticeInfo): Promise<AWSDKPractice>;

            /**
             * Get an instance of {@link AWSDKPracticeFutureAvailabilitySearchCriteria} to use when searching for a practice's future availability.
             * @param searchCriteria the search criteria in JSON Format
             */
            getNewPracticeFutureAvailabilitySearchCriteria(searchCriteria?: Object): AWSDKPracticeFutureAvailabilitySearchCriteria;

            /**
             * Retrieve a List of Dates for the given {@link AWSDKPractice} for scheduling appointments in the future
             * There is an optional Date parameter for appointmentDate. Providing it will limit the search
             * to the given date.  If this date is not provided, the next date with available appointments will be used.
             * @param consumer the {@link AWSDKConsumer} or whose list of practices we seek to retrieve
             * @param practiceFutureAvailabilitySearchCriteria the {@link AWSDKPracticeFutureAvailabilitySearchCriteria} to use when searching for a practice's future availability.
             */
            practiceFutureAvailabilitySearch(consumer: AWSDKConsumer, practiceFutureAvailabilitySearchCriteria: AWSDKPracticeFutureAvailabilitySearchCriteria): Promise<AWSDKAvailabilityList>;

            /**
             * Retrieve the collection of {@link AWSDKOnDemandSpecialty[]} associated with the given {@link AWSDKPractice}, satisfying the optional search term.
             * @param consumer the {@link AWSDKConsumer} for whom to perform the search.
             * @param practice the {@link AWSDKPractice} to search in.
             * @param searchTerm a term by which to limit the search
             */
            getOnDemandSpecialties(consumer: AWSDKConsumer, practice: AWSDKPractice, searchTerm?: string): Promise<AWSDKPractice>;

            /**
             * Get an instance of {@link AWSDKPracticeSearchCriteria} to use when searching for practices.
             * @param searchCriteria the search criteria in JSON Format
             */
            getNewPracticeSearchCriteria(searchCriteria: Object): AWSDKPracticeSearchCriteria;

            /**
             * This method allows for an authenticated and unauthenticated search for a list of {@link AWSDKPracticeSearchResult} based on type. Additionally, the caller can pass in the language and maxResults.
             * as a way of filtering the response list further.
             * @param practiceType the practice type to search for. Possible values are: DEFAULT, EXCLUSIVE, NORMAL. If no practiceType is passed, this method returns practices of DEFAULT type.
             * @param consumer the {@link AWSDKConsumer} context for authenticated searches
             * @param language filters the list of practice based on language
             * @param maxResults an integer which specifies the maximum number of results to return.
             */
            findPracticesByType(practiceType?: string, consumer?: AWSDKConsumer, language?: AWSDKLanguage, maxResults?: number): Promise<AWSDKPracticeSearchResult[]>;

            /**
             * This method allows for an authenticated and unauthenticated search for a list of {@link AWSDKPracticeSearchResult} based on a set of search criteria. The caller can set the practice type, sourceId, language and maxResults of the AWSDKPracticeSearchCriteria.
             * as a way of filtering the response list further.
             * @param practiceSearchCriteria the {@link AWSDKPracticeSearchCriteria} context for searches
             */
            findPractices(practiceSearchCriteria: AWSDKPracticeSearchCriteria): Promise<AWSDKPracticeSearchResult[]>;

            /**
             * This method returns a filtered list of {@link AWSDKPractice} objects based on the provided {@link AWSDKPracticeCategory}.
             * @param practices the list of {@link AWSDKPractice} objects to filter
             * @param practiceCategory the {@link AWSDKPracticeCategory} used to filter the list of practices
             * @throws with an {@link AWSDKErrorCode.illegalArgument|AWSDKErrorCode.illegalArgument} if practices is not a {AWSDKPractice[]} or practiceCategory is not a {AWSDKPracticeCategory}
             */
            getPracticesByCategory(practices: AWSDKPractice[], practiceCategory: AWSDKPracticeCategory): AWSDKPractice[];

        }

        /**
         * This is the ProviderService class, which contains all necessary methods for getting provider related information.
         */
        class ProviderService {
            /**
             * This is the ProviderService class, which contains all necessary methods for getting provider related information.
             */
            constructor();

            /**
             * Retrieve an array of {@link AWSDKProvider} for the given practice, via {@link AWSDKPractice}
             * retrieved via {@link PracticeService#getPractice|PracticeService.getPractice}.
             * Providing a {@link AWSDKConsumer} (OPTIONAL) will ALWAYS filter results to a list of providers visible to that consumer. Omit consumer if that's not what you want.
             * The {@link AWSDKConsumer} is retrieved via {@link ConsumerService#getConsumer|ConsumerService.getConsumer}.
             * @param practice REQUIRED limits the result to providers in this practice
             * @param consumer limits the results to providers visible to this consumer
             */
            findProvidersInPractice(practice: AWSDKPractice, consumer?: AWSDKConsumer): Promise<AWSDKProvider[]>;

            /**
             * Retrieve the {@link AWSDKProviderDetails} details for the given provider, via {@link AWSDKProvider}
             * retrieved via {@link ProviderService#findProvidersInPractice|ProviderService.findProvidersInPractice}.
             * @param provider REQUIRED
             * @param consumer the authenticated consumer, if any.
             */
            getProviderDetails(provider: AWSDKProvider, consumer?: AWSDKConsumer): Promise<AWSDKProviderDetails>;

            /**
             * Get an instance of {@link AWSDKProviderFutureAvailabilitySearchCriteria} to use when searching a provider's future availability.
             * @param searchCriteria the search criteria in JSON Format
             */
            getNewProviderFutureAvailabilitySearchCriteria(searchCriteria?: Object): AWSDKProviderFutureAvailabilitySearchCriteria;

            /**
             * Retrieve an array of {@link AWSDKProvider}  for the given {@link AWSDKPractice} for scheduling appointments in the future
             * There is an optional Date parameter for appointmentDate. Providing it will limit the search
             * to the given date.  If this date is not provided, the next date with available appointments will be used.
             * @param consumer the {@link AWSDKConsumer} whose list of practices we seek to retrieve
             * @param AWSDKProviderFutureAvailabilitySearchCriteria the {@link AWSDKProviderFutureAvailabilitySearchCriteria} to use when searching for a provider's future availability.
             */
            providerFutureAvailabilitySearch(consumer: AWSDKConsumer, AWSDKProviderFutureAvailabilitySearchCriteria: AWSDKProviderFutureAvailabilitySearchCriteria): Promise<AWSDKProvidersAvailability>;

            /**
             * Get an instance of {@link AWSDKProviderAvailabilityCriteria} to use when searching a provider's availability.
             * @param criteria the search criteria in JSON Format
             */
            getNewProviderAvailabilityCriteria(criteria?: Object): AWSDKProviderAvailabilityCriteria;

            /**
             * Retrieve a List of Dates for the given {@link mode.AWSDKProviderDetails} for scheduling appointments in
             * the future.
             *
             * There is an optional Date field on the {@link AWSDKProviderAvailabilityCriteria} for appointmentDate.
             * Providing it will limit the search to the given date. If this date is not provided,
             * the server will automatically find and return the next date with available appointments.
             *
             * @param consumer the {@link AWSDKConsumer} to use
             * @param providerAvailabilityCriteria the {@link AWSDKProviderAvailabilityCriteria} to use
             */
            getProviderAvailability(consumer: AWSDKConsumer, providerAvailabilityCriteria: AWSDKProviderAvailabilityCriteria): Promise<AWSDKAvailabilityList>;

            /**
             * Retrieve an array of past {@link AWSDKProvider}s for the given consumer.
             * @param consumer the consumer to find past providers for
             * @param maxResults limits the max number of providers returned by the search
             * @deprecated
             */
            findPastProviders(consumer: AWSDKConsumer, maxResults?: number): Promise<AWSDKProvider[]>;

            /**
             * Retrieve an array of past {@link AWSDKProvider}s for the given consumer.
             * @param {AWSDKConsumer} consumer the consumer to find past providers for
             * @param {object} [options] an object of optional search parameters
             * @param {Number} [options.maxResults] limits the max number of providers returned by the search
             * @param {AWSDKPractice} [options.practice] when provided narrows the search to only providers within the practice
             * @param {AWSDKPracticeSearchType} [options.practiceSearchType] when provided narrows the search to only providers in practices of the specified type
             * @since TODO
             */
            searchPastProviders(consumer: AWSDKConsumer, options?: {
                maxResults?: number,
                practice?: AWSDKPractice,
                practiceSearchType?: AWSDKPracticeSearchType,
            }): Promise<AWSDKProvider[]>;

            /**
             * This method allows for the retrieval of an array of {@link AWSDKProvider} based on an authenticated or unauthenticated search.
             * All the parameters to this method are optional when making an <em>unauthenticated</em> search. The parameters allow to filter the result obtained. Only the consumer
             * parameter is required when making an <em>authenticated</em> request.
             * @param consumer the consumer whose context to use for providers search. Only needed if making authenticated searches.
             * @param practice the practice for which to get the list of providers from.
             * @param onDemandSpecialty the on-demand specialty practice to filter by.
             * @param searchTerm the name or regular expression to use to search for provider by name. Needs to be at least 3 chars long
             * @param specialties an array of provider specialties to filter by.
             * @param sourceIds the array of sourceIds to filter by
             * @param licensedInState the state where the provider is licensed to practice
             * @param languageSpoken a language that the provider speaks
             * @param maxResults the maximum number of results to return from the search. Must be a positive integer
             */
            findProviders(consumer?: AWSDKConsumer, practice?: AWSDKPractice | AWSDKPracticeSearchResult, onDemandSpecialty?: AWSDKOnDemandSpecialty, searchTerm?: string, specialties?: AWSDKProviderType[], sourceIds?: string[], licensedInState?: AWSDKState, languageSpoken?: AWSDKLanguage, maxResults?: number): Promise<AWSDKProvider[]>;

            /**
             * This method allows for the retrieval of the estimated cost of a visit, before insurance, with a given Provider.
             * @param providerDetails the Provider whose cost of visit with we wish to obtain.
             * @param consumer the authenticated {@link AWSDKConsumer} inquiring about the pricing of a visit with this Provider
             */
            getEstimatedVisitCost(providerDetails: AWSDKProviderDetails, consumer: AWSDKConsumer): Promise<AWSDKEstimatedVisitCost>;

        }

        /**
         * This service handles everything related to secure messages and supporting infrastructure.
         */
        class SecureMessageService {
            /**
             * This service handles everything related to secure messages and supporting infrastructure.
             */
            constructor();

            /**
             * Get an instance of {@link AWSDKUploadAttachment} to use when sending an attachment with a secure message.
             */
            newUploadAttachment(): AWSDKUploadAttachment;

            /**
             * Get an instance of {@link AWSDKNewMessageDraft} to use when sending a new secure message.
             */
            getNewMessageDraft(): AWSDKNewMessageDraft;

            /**
             * Get an instance of {@link AWSDKReplyMessageDraft} to use when sending a reply secure message.
             * @param detailedMessage the {@link AWSDKDetailedMessage} the secure message is a reply to
             */
            getReplyMessageDraft(detailedMessage: AWSDKDetailedMessage): AWSDKReplyMessageDraft;

            /**
             * Get an instance of {@link AWSDKForwardMessageDraft} to use when sending a forward secure message.
             * @param secureMessageContact the {@link AWSDKSecureMessageContact} to send the message to
             * @param detailedMessage the {@link AWSDKDetailedMessage} the secure message is forwarding
             */
            getForwardMessageDraft(secureMessageContact: AWSDKSecureMessageContact, detailedMessage: AWSDKDetailedMessage): AWSDKForwardMessageDraft;

            /**
             * First-time retrieval of secure inbox messages
             * This can be used in a "batch" mode by providing a value for startIndex and maxResults
             * The optional SINCE parameter will ALSO include any messages that have changed after the
             * given timestamp. These are in addition to the batch messages.
             * This method will retrieve all messages that are within the startIndex and maxResults
             * parameters and all messages that have changed after the specified "since" time. The since
             * parameter is not applied to the messages that are within the startIndex and maxResults
             * parameters.
             * @param consumer the {@link AWSDKConsumer} to retrieve messages for
             * @param startIndex the index of first message to retrieve
             * @param maxResults the number of messages to retrieve, must be an int greater than 0 or 'null' for all results
             * @param since the timestamp for changed messages
             */
            getInboxMessages(consumer: AWSDKConsumer, startIndex?: number, maxResults?: number, since?: Date): Promise<AWSDKInbox>;

            /**
             * First-time retrieval of sent secure messages.
             * This can be used in a "batch" mode by providing a value for startIndex and maxResults.
             * The optional SINCE parameter will ALSO include any messages that have changed after the
             * given timestamp. These are in addition to the batch messages.
             * This method will retrieve all messages that are within the startIndex and maxResults
             * parameters and all messages that have changed after the specified "since" time. The since
             * parameter is not applied to the messages that are within the startIndex and maxResults
             * parameters.
             * @param consumer the {@link AWSDKConsumer} to retrieve messages for
             * @param startIndex the index of first message to retrieve
             * @param maxResults the number of messages to retrieve, must be an int greater than 0 or 'null' for all results
             * @param since the timestamp for changed messages
             */
            getSentMessages(consumer: AWSDKConsumer, startIndex?: number, maxResults?: number, since?: Date): Promise<AWSDKSentMessages>;

            /**
             * Get the full detail of a given secure message.
             * @param consumer the {@link AWSDKConsumer} to retrieve the message for
             * @param secureMessage the message to retrieve more detail for
             */
            getMessageDetail(consumer: AWSDKConsumer, secureMessage: AWSDKSecureMessage): Promise<AWSDKDetailedMessage>;

            /**
             * Get the secure message contacts for a consumer.
             * @param consumer the {@link AWSDKConsumer} to retrieve contacts for
             */
            getContacts(consumer: AWSDKConsumer): Promise<AWSDKSecureMessageContact[]>;

            /**
             * Send a new, reply, or forward secure message.
             * @param consumer the {@link AWSDKConsumer} sending the message
             * @param messageDraft the {@link AWSDKMessageDraft} to send
             */
            sendMessage(consumer: AWSDKConsumer, messageDraft: AWSDKMessageDraft): Promise<boolean>;

            /**
             * Remove a secure message.
             * @param consumer the {@link AWSDKConsumer} removing the message
             * @param secureMessage the {@link AWSDKSecureMessage} to remove
             */
            removeMessage(consumer: AWSDKConsumer, secureMessage: AWSDKSecureMessage): Promise<AWSDKDetailedMessage>;

            /**
             * Update a {@link AWSDKInboxMessage} or {@link AWSDKDetailedMessage} with {@link AWSDKMessageType} "Inbox" from unread to read.
             * @param consumer the {@link AWSDKConsumer} who read the message
             * @param inboxOrDetailedMessage the {@link AWSDKInboxMessage} or {@link AWSDKDetailedMessage} to update
             */
            updateMessageRead(consumer: AWSDKConsumer, inboxOrDetailedMessage: AWSDKInboxMessage | AWSDKDetailedMessage): Promise<AWSDKDetailedMessage>;

            /**
             * Retrieve the blob for a given {@link AWSDKAttachment}.
             * @param consumer the {@link AWSDKConsumer} to get the attachment for
             * @param attachment the {@link AWSDKAttachment} to get
             */
            getAttachment(consumer: AWSDKConsumer, attachment: AWSDKAttachment): Promise<Blob>;

            /**
             * Refresh the given {@link AWSDKInbox} with any changes that have occurred since its timestamp.
             * @param consumer the {@link AWSDKConsumer} to get the refreshed inbox for
             * @param inbox the {@link AWSDKInbox} to refresh
             */
            refreshInbox(consumer: AWSDKConsumer, inbox: AWSDKInbox): Promise<boolean>;

            /**
             * Refresh the given {@link AWSDKSentMessages} with any changes that have occurred since its timestamp.
             * @param consumer the {@link AWSDKConsumer} to get the refreshed sentMessages for
             * @param sentMessages the {@link AWSDKSentMessages} to refresh
             */
            refreshSentMessages(consumer: AWSDKConsumer, sentMessages: AWSDKSentMessages): Promise<boolean>;

        }

        type AWCoreSDKVideoParticipantType = 'Consumer' | 'Provider' | 'Guest';

        interface AWCoreSDKVideoParticipant { }

        interface getTestMyComputerWizard_config {
            /**
             * The DOM node that the wizard will attach itself to.
             */
            container: HTMLElement;

            /**
             * The callback to be invoked with the test results when the user has completed the wizard.
             */
            doneCallback: Function;

            /**
             * The authentication object.
             */
            authentication: AWSDKAuthentication;
        }

        /**
         * This service handles everything related to running the test my computer flow.
         *
         * @since 2.0.0
         */
        class TestMyComputerService {
            /**
             * This service handles everything related to running the test my computer flow.
             *
             * @since 2.0.0
             */
            constructor(sdk: AWSDK);

            /**
             * Gets a new instance of the Test My Computer wizard.
             *
             * Note: In order to use WebRTC, the appropriate server configurations need to be made on the AmWell platform to enable WebRTC and to use the latest supported video platform.
             * @param {Object} config The configuration used to create the wizard.
             * @param {HTMLElement} config.container The DOM node that the wizard will attach itself to
             * @param {Function} config.doneCallback The callback to be invoked with the test results when the user has completed the wizard
             * @param {AWSDKConsumer} config.consumer The consumer to run the wizard for, upon completion their appointment readiness will be updated if SystemConfiguration.appointmentReadinessEnabled is TRUE
             * @param {AWSDKAppointment} config.appointment The appointment to run the wizard for, upon completion the readiness for the appointment will be updated
             * @returns {Object} returns an instance of the wizard which can be started with wizard.start() and stopped with wizard.stop()
             */
            getTestMyComputerWizard(config?: getTestMyComputerWizard_config): Object;

            /**
             * Get an instance of a TestMyComputerMini component. Register an `onStatus` callback, and
             * call `start` when ready. Call `stop` when tearing down.
             *
             * @private
             * @param {object} props A configuration object to define callbacks
             * @param {function=} props.onStatus fired for all device permission states. Called with an object containing `mic` and `camera` members.  The absence of ` mic.error` or `camera.error` in the state indicates success.
             * @param {HTMLElement} props.container The HTMLElement that will host the TestMyComputerMini DOM
             * @param {string} locale A locale to use for messages, defaults to built-in `en-US` strings
             * @param {object} messages Individual message overrides, to align with i18n keys.  Trumps `locale` messages detected.
             * @returns {awcoresdk.TMCMini} the MiniWizard component to start/stop
             */
            getTestMyComputerMiniWizard(config?: getTestMyComputerWizard_config): Object;
        }

        /**
         * The VisitService class handles all the aspects of a visit.
         * <br/><br/>
         * The basic sequence for a consumer visit should be
         * <ul>
         * <li>Start by calling {@link VisitService#getVisitContext|getVisitContext}</li>
         * <li>Update the visit context with data provided by the consumer</li>
         * <li>Call {@link VisitService#createVisit|createVisit} passing the visitContext</li>
         * <p>Once the visit is created, the process of calculating the cost of the visit will begin. The cost calculation can take some time to complete.</p>
         * <li>Call {@link VisitService#waitForVisitCostCalculationToFinish|waitForVisitCostCalculationToFinish}</li>
         * <li>At this point, if the visit is not free, the payment method can be checked by calling {@link ConsumerService#getPaymentMethod|getPaymentMethod}</li>
         * <li>If needed, the consumer credit card can be updated by calling {@link ConsumerService#updatePaymentMethod|updatePaymentMethod}</li>
         * <li>A coupon can be applied by calling {@link VisitService#applyCouponCode|applyCouponCode}</li>
         * <li>Call {@link VisitService#startVisit|startVisit}</li>
         * <p>The consumer is now in the provider's waiting room and the provider has been notified</p>
         * <li>Call {@link VisitService#launchTelehealthVideo|launchTelehealthVideo}</li>
         * <p>This will indicate if the consumer has successfully launched the telehealth video.
         * If telehealth video failed to launch the consumer does not have the telehealth video installed.
         * The consumer will need to download and install the Telehealth Video from the {@link VisitService#telehealthVideoInstallUrl|telehealthVideoInstallUrl}</li>
         * Once the Telehealth Video is installed it can be re-launched by calling {@link VisitService#launchTelehealthVideo|launchTelehealthVideo}</p>
         * <li>Call {@link VisitService#waitForTelehealthVideoToStart|waitForTelehealthVideoToStart}</li>
         * <p>The Teleahealth video will now have successfully started</p>
         * <li>Call {@link VisitService#waitForProviderToJoinVisit|waitForProviderToJoinVisit}</li>
         * <p>The provider has now joined and the visit can proceed</p>
         * <li>Call {@link VisitService#updateConnectionStatus|updateConnectionStatus} to indicate the consumer is ready to continue</li>
         * <li>Call {@link VisitService#waitForVisitToFinish|waitForVisitToFinish}</li>
         * <li>Call {@link VisitService#getVisitSummary|getVisitSummary}</li>
         * <p>
         * </ul>
         */
        class VisitService {
            /**
             * The VisitService class handles all the aspects of a visit.
             * <br/><br/>
             * The basic sequence for a consumer visit should be
             * <ul>
             * <li>Start by calling {@link VisitService#getVisitContext|getVisitContext}</li>
             * <li>Update the visit context with data provided by the consumer</li>
             * <li>Call {@link VisitService#createVisit|createVisit} passing the visitContext</li>
             * <p>Once the visit is created, the process of calculating the cost of the visit will begin. The cost calculation can take some time to complete.</p>
             * <li>Call {@link VisitService#waitForVisitCostCalculationToFinish|waitForVisitCostCalculationToFinish}</li>
             * <li>At this point, if the visit is not free, the payment method can be checked by calling {@link ConsumerService#getPaymentMethod|getPaymentMethod}</li>
             * <li>If needed, the consumer credit card can be updated by calling {@link ConsumerService#updatePaymentMethod|updatePaymentMethod}</li>
             * <li>A coupon can be applied by calling {@link VisitService#applyCouponCode|applyCouponCode}</li>
             * <li>Call {@link VisitService#startVisit|startVisit}</li>
             * <p>The consumer is now in the provider's waiting room and the provider has been notified</p>
             * <li>Call {@link VisitService#launchTelehealthVideo|launchTelehealthVideo}</li>
             * <p>This will indicate if the consumer has successfully launched the telehealth video.
             * If telehealth video failed to launch the consumer does not have the telehealth video installed.
             * The consumer will need to download and install the Telehealth Video from the {@link VisitService#telehealthVideoInstallUrl|telehealthVideoInstallUrl}</li>
             * Once the Telehealth Video is installed it can be re-launched by calling {@link VisitService#launchTelehealthVideo|launchTelehealthVideo}</p>
             * <li>Call {@link VisitService#waitForTelehealthVideoToStart|waitForTelehealthVideoToStart}</li>
             * <p>The Teleahealth video will now have successfully started</p>
             * <li>Call {@link VisitService#waitForProviderToJoinVisit|waitForProviderToJoinVisit}</li>
             * <p>The provider has now joined and the visit can proceed</p>
             * <li>Call {@link VisitService#updateConnectionStatus|updateConnectionStatus} to indicate the consumer is ready to continue</li>
             * <li>Call {@link VisitService#waitForVisitToFinish|waitForVisitToFinish}</li>
             * <li>Call {@link VisitService#getVisitSummary|getVisitSummary}</li>
             * <p>
             * </ul>
             */
            constructor();

            /**
             * The TelehealthVideo install url.
             */
            telehealthVideoInstallUrl: string;

            /**
             * Creates a video participant of the given type.
             * @param name the name of the participant as it should appear in the video console
             * @param videoDOMNode a reference to the <video> DOM node that will render the participant's self-view
             * @param nameDOMNode a reference to the DOM node that will render the participant's name
             * @param participantType the type of the participant: 'Consumer', 'Provider' or 'Guest'
             * @returns a fully constructed instance of AWCoreSDKVideoParticipant
             */
            createWebRTCVideoParticipant(name: string, videoDOMNode: Object, nameDOMNode: Object, participantType: AWCoreSDKVideoParticipantType): AWCoreSDKVideoParticipant;

            /**
             * The enumeration for the valid types of video participants.
             * @returns The valid types of video participants.
             */
            videoParticipantType: any;

            /**
             * Creates an {@link AWSDKVideoContext} from the given argument.
             * @param config an object that aggregates the following context properties
             * @param config.consumerParticipant Specifies where in the DOM the consumer should be rendered
             * @param config.providerParticipant Specifies where in the DOM the provider should be rendered
             * @param config.attachPoints the various nodes in the DOM where the video will be rendered
             * @param config.successCallback Function to execute when the video visit has ended successfully
             * @param config.errorCallback Function to execute when the video visit has encountered an unrecoverable error
             * @returns a fully-composed instance of {@link AWSDKVideoContext}
             */
            createVideoContext(config: createVideoContext_config): AWSDKVideoContext;

            /**
             * Connects the consumer of the given {@link AWSDKVisit} to a video call where their visit with the assigned {@link AWSDKProvider} will occur.
             * Requires that {@link VisitService#startVisit} has already been called successfully.
             *
             * Once started, the video call will progress through its phases of waiting for the provider to join and then having the actual visit,
             * fully rendered in the various DOM attach points specified as arguments.
             *
             * Should an unrecoverable error occur at any point after the call has been initiated, the errorCallback will be called.
             *
             * Otherwise, should the visit complete successfully, the successCallback will be called.
             * @param visit The visit for which to establish a video call
             * @param videoContext the context in which this visit will appear
             * @returns whether or not the video call was initiated successfully.
             */
            startWebRTCVisit(visit: AWSDKVisit, videoContext: AWSDKVideoContext): Promise<AWCoreSDKVideoConsole>;

            /**
             * Connects the given {@link AWSDKVideoParticipant} guest to an ongoing webRTC video visit.
             * Should an unrecoverable error occur at any point after the call has been initiated, the errorCallback will be called.
             * Otherwise, should the visit complete successfully, the successCallback will be called.
             *
             * Note: In order to use WebRTC, the appropriate server configurations need to be made on the AmWell platform to enable WebRTC and to use the latest supported video platform.
             *
             * @param {AWSDKVideoParticipant} videoParticipant The guest participant joining the visit
             * @param {AWSDKVideoContext} videoContext the context in which this visit will appear
             * @returns {Promise<awcoresdk.AWCoreSDKVideoConsole|AWSDKError>} a promise that will resolve to a {@link awcoresdk.AWCoreSDKVideoConsole|AWCoreSDKVideoConsole} or rejected with an {@link AWSDKError}
             * @throws {AWSDKError} with an {@link AWSDKErrorCode.illegalArgument}
             * if videoParticipant is not a valid instance of {@link AWSDKVideoParticipant} or if the
             * videoContext is not a valid instance of {@link AWSDKVideoContext}.
             * @since 2.0.0
             */
            startWebRTCVisitForGuest(videoParticipant: AWSDKVideoParticipant, videoContext: AWSDKVideoContext): Promise<AWCoreSDKVideoConsole>;

            /**
             * Get an instance of {@link AWSDKConsumerOverrideDetails} to use when providing consumer data during cart-based visits.
             * The {@link AWSDKConsumerOverrideDetails} object obtained here can be validated by an (optional) call to the {@link VisitService#validateConsumerOverrideDetails(AWSDKConsumerOverrideDetails)|validateConsumerOverrideDetails(AWSDKConsumerOverrideDetails)}.
             */
            newConsumerOverrideDetails(): AWSDKConsumerOverrideDetails;

            /**
             * Get an instance of {@link AWSDKVisitSearchCriteria} to use for finding a list of visits.
             * @param criteria A partially-populated {@link AWSDKVisitSearchCriteria} to initialize the {@link @AWSDKVisitSearchCriteria} from
             */
            getNewVisitSearchCriteria(criteria: AWSDKPartialVisitSearchCriteria): AWSDKVisitSearchCriteria;

            /**
             * Retrieve a {@link AWSDKVisitContext} object for the given {@link AWSDKConsumer}
             * for a visit with the specified {@link AWSDKProvider} or within the specified {@link AWSDKOnDemandSpecialty}
             * This is the first (required) step when initiating a visit.
             * @param consumer REQUIRED the consumer for whom the visit is being scheduled
             * @param providerOrOnDemandSpecialty REQUIRED either the {@link AWSDKProvider} or {@link AWSDKOnDemandSpecialty} for which to retrieve the context
             */
            getVisitContext(consumer: AWSDKConsumer, providerOrOnDemandSpecialty: AWSDKProvider | AWSDKOnDemandSpecialty): Promise<AWSDKVisitContext>;

            /**
             * Retrieve a {@link AWSDKSpeedPass} object for the specified {@link AWSDKConsumer} and {@link AWSDKOnDemandSpecialty} or {@link. AWSDKProvider|AWSDKProvider}.
             * The system needs to be configured with {@link AWSDKSystemConfiguration#speedPassActive|AWSDKSystemConfiguration.speedPassActive} set to TRUE.
             * @param consumer the consumer to get the speed pass for
             * @param providerOrOnDemandSpecialty REQUIRED either the {@link AWSDKProvider} or {@link AWSDKOnDemandSpecialty} for which to retrieve the speedPass
             */
            getSpeedPass(consumer: AWSDKConsumer, providerOrOnDemandSpecialty: AWSDKProvider | AWSDKOnDemandSpecialty): Promise<AWSDKSpeedPass>;

            /**
             * Retrieve a {@link AWSDKVisitContext} object for the specified {@link AWSDKAppointment}.
             * This is the first (required) step when initiating a visit.
             * @param appointment REQUIRED the appointment the visit is being scheduled
             */
            getVisitContextForAppointment(appointment: AWSDKAppointment): Promise<AWSDKVisitContext>;

            /**
             * Create or update a visit given a {@link AWSDKVisitContext}.
             * The visitContext should be obtained by a call to {@link VisitService#getVisitContext|getVisitContext}.
             * This method will create or update a *NEW* visit and start to calculate the visit cost.  Update will be called for
             * visits with appointments.
             * @param visitContext is the context of the visit that was created by a call to getVisitContext.
             */
            createOrUpdateVisit(visitContext: AWSDKVisitContext): Promise<AWSDKVisit>;

            /**
             * Create an On Demand visit given a {@link AWSDKVisitContext}.
             * The visitContext should be obtained by a call to {@link VisitService#getVisitContext|getVisitContext}.
             * This method will create a *NEW* On Demand visit and start to calculate the visit cost.
             * @param visitContext is the context of the visit that was created by a call to getVisitContext.
             */
            createVisit(visitContext: AWSDKVisitContext): Promise<AWSDKVisit>;

            /**
             * Search for visits for a given consumer. The {@link AWSDKVisitSearchCriteria} can be obtained from {@link VisitService#getNewVisitSearchCriteria|getNewVisitSearchCriteria}.
             * @param consumer the consumer to get the visits for.
             * @param visitSearchCriteria the criteria to filter the result by.
             */
            searchVisits(consumer: AWSDKConsumer, visitSearchCriteria: AWSDKVisitSearchCriteria): Promise<AWSDKVisit[]>;

            /**
             * Create a visit given a {@link AWSDKSpeedPass}.
             * This method will create a *NEW* visit from a {@link AWSDKSpeedPass}.
             * @param AWSDKSpeedPass is the {@link AWSDKSpeedPass} acquired from {@link VisitService#getSpeedPass|getSpeedPass}.
             */
            createVisitFromSpeedPass(AWSDKSpeedPass: AWSDKSpeedPass): Promise<AWSDKVisit>;

            /**
             * Update a visit given a {@link AWSDKVisitContext}.
             * The visitContext should be obtained by a call to {@link VisitService#getVisitContext|getVisitContext}.
             * This method will update a visit and calculate the visit cost.
             * @param visitContext is the context of the visit that was created by a call to getVisitContext.
             */
            updateVisit(visitContext: AWSDKVisitContext): Promise<AWSDKVisit>;

            /**
             * This method will wait for the cost calculation to finish processing.
             * @param visit is the object that was created by a call to createVisit.
             */
            waitForVisitCostCalculationToFinish(visit: AWSDKVisit): Promise<AWSDKVisit>;

            /**
             * This method will put the consumer into the provider's waiting room.
             * @param visit is the object that was created by a call to createVisit
             */
            startVisit(visit: AWSDKVisit): Promise<AWSDKVisit>;

            /**
             * This method will wait for the telehealth video to start by getting an updated {@link AWSDKVisit} and checking the telehealthVideoStarted property.
             * The call will also return if the visit has finished.
             * @param visit is the object that was created by a call to createVisit.
             */
            waitForTelehealthVideoToStart(visit: AWSDKVisit): Promise<AWSDKVisit>;

            /**
             * This method will wait for the provider to join the visit.
             * @param visit is the object that was created by a call to {@link VisitService#createVisit|createVisit}.
             * @param callback the callback to be called on before visit starts
             */
            waitForProviderToJoinVisit(visit: AWSDKVisit, callback?: Function): Promise<AWSDKVisit>;

            /**
             * This method will wait for the visit to finish.
             * @param visit is the object that was created by a call to {@link VisitService#createVisit|createVisit}.
             * @param callback the callback to be called on while the visit is in progress @since 1.4.0
             */
            waitForVisitToFinish(visit: AWSDKVisit, callback?: Function): Promise<AWSDKVisit>;

            /**
             * This method will get an updated Visit.
             * @param visit is the object that was created by a call to {@link VisitService#createVisit|createVisit}.
             * @param alwaysRetrieveChatMessages TRUE if the visit response should contain the full chat report, including any messages added by the provider, even if an assistant has not initiated the chat.
             */
            getVisit(visit: AWSDKVisit, alwaysRetrieveChatMessages?: boolean): Promise<AWSDKVisit>;

            /**
             * This method will indicate the member has connected to the Visit.
             * @param visit is the object that was created by a call to {@link VisitService#createVisit|createVisit}.
             */
            updateConnectionStatus(visit: AWSDKVisit): Promise<AWSDKVisit>;

            /**
             * This method will cancel the Visit that has not started.
             * @param visit is the object that was created by a call to {@link VisitService#createVisit|createVisit}.
             */
            cancelVisit(visit: AWSDKVisit): Promise<AWSDKVisit>;

            /**
             * Ends an in progress visit.
             * @param visit The visit that is in progress
             */
            endVisit(visit: AWSDKVisit): Promise<AWSDKVisit>;

            /**
             * This method will launch the telehealth video.
             * @param visit is the object returned by a call to {@link VisitService#startVisit|startVisit}.
             */
            launchTelehealthVideo(visit: AWSDKVisit): Promise<boolean>;

            /**
             * After completing a visit via the Video Visit console activity, this method will return the
             * {@link AWSDKVisitSummary} with the final details from the provider.
             * @param visit is the object returned by a call to startVisit.
             */
            getVisitSummary(visit: AWSDKVisit): Promise<AWSDKVisitSummary>;

            /**
             * This method will apply a coupon code to the visit.
             * @param visit is the object returned by a call to {@link VisitService#startVisit|startVisit}.
             * @param couponCode is the string of the coupon code
             */
            applyCouponCode(visit: AWSDKVisit, couponCode: string): Promise<AWSDKVisitCost>;

            /**
             * This method will send the visit summary to an array of email addresses, fax numbers, or both. Either must be provided.
             * @param visitSummary is the object returned by a call to method {@link VisitService#getVisitSummary|getVisitSummary}.
             * @param hipaaNoticeAccepted is whether or not the HIPAA notice was accepted.
             * @param emailAddresses the email addresses to share the visit summary with
             * @param faxNumbers the fax numbers to share the visit summary with
             */
            sendVisitSummary(visitSummary: AWSDKVisitSummary, hipaaNoticeAccepted: boolean, emailAddresses?: string[], faxNumbers?: string[]): Promise<AWSDKVisitSummary>;

            /**
             * This method will submit the consumer's response to a visit feedback question.
             * @param visitOrVisitSummary either the visit or visit summary to add feedback for.
             * @param question is the string representing the question that the consumer was asked.
             * @param answer is the string representing the answer that the consumer provided for the question asked.
             */
            addFeedback(visitOrVisitSummary: AWSDKVisitSummary | AWSDKVisit, question: string, answer: string): Promise<boolean>;

            /**
             * This method allows the consumer to submit a star rating for the visit just concluded and/or the provider to whom he/she just had a visit with.
             * The rating is based on a zero to five star rating system, where a zero represents the lowest/worst experience and a five the highest/best experience.
             * @param visitSummary is the object that was created by a call to {@link VisitService#getVisitSummary|getVisitSummary}.
             * @param providerRating is the number of stars attributed to the provider as rating
             * @param visitRating is the number of stars attributed to the visit as rating
             */
            addRating(visitSummary: AWSDKVisitSummary, providerRating: number, visitRating: number): Promise<AWSDKVisitSummary>;

            /**
             * This method adds a chat message to an existing chat session. This happens when a staff communicates with a consumer during the waiting room while the provider hasn't joined.
             * @param visit the visit associated with this chat message
             * @param message the new chat message content
             * @param lastPolledChatOrdinal the ordinal for the last reported chat message
             */
            addChatMessage(visit: AWSDKVisit, message: string, lastPolledChatOrdinal: number): Promise<AWSDKChatReport>;

            /**
             * Setup alerts via Text messages when the provider is ready or this {@link AWSDKVisit} goes up in the waiting list.
             * @param visit the visit to set up alerts for
             * @param phoneNumber the phoneNumber to text
             * @param providerReadyAlert whether or not to be alerted when provider is ready
             * @param movedUpInQueueAlert whether or not to be alerted when moved up in the queue
             */
            setupWaitingRoomAlerts(visit: AWSDKVisit, phoneNumber: string, providerReadyAlert?: boolean, movedUpInQueueAlert?: boolean): Promise<boolean>;

            /**
             * This method accepts a suggested transfer. If the suggested provider is still available the visit will be cancelled.
             * Once the visit has cancelled call handleTransfer to create a new visit that will copy details from this visit.
             * If the suggested provider is no longer available an error will be returned. If a new suggested provider is available it will be set on the visit.
             * @param visit the visit with a suggested transfer
             */
            acceptSuggestedTransfer(visit: AWSDKVisit): Promise<boolean>;

            /**
             * This method accepts the option of transferring to a Find First Available provider and begins the process of finding a provider to transfer to.
             * @param visit the visit that is currently being waited on
             */
            acceptFindFirstAvailableTransferVisitSuggestion(visit: AWSDKVisit): Promise<AWSDKVisit>;

            /**
             * This method declines a suggested transfer. If the dontSuggestTransferAgain is set to TRUE no other transfers will be suggested for this visit.
             * @param visit the visit with a suggested transfer
             * @param dontSuggestTransferAgain set to TRUE to stop other suggested transfers for this visit.
             */
            declineSuggestedTransfer(visit: AWSDKVisit, dontSuggestTransferAgain: boolean): Promise<AWSDKVisit>;

            /**
             * This method handles either returning a visitContext or a visit if the transfer is eligible for quick transfer.
             * @param visit the visit with a suggested transfer
             */
            handleTransfer(visit: AWSDKVisit): Promise<AWSDKTransfer>;

            /**
             * This method allows the addition of a phone conversation while the visit is already in progress. This allows providers and consumers to stay in a conversation
             * when there are network issues that are impacting video visits. The phone number used for the visit is the one the consumer provided during intake or the one
             * on file for this particular consumer.
             * @param visit the visit that we want to add a phone conversation to
             */
            addPhoneToVisit(visit: AWSDKVisit): Promise<boolean>;

            /**
             * Finds the First Available {@link AWSDKProvider} to accept the given visit, either an {@link AWSDKVisit} or an {@link AWSDKVisitContext}.
             * @param visitInfo a {@link AWSDKVisit} or {@link AWSDKVisitContext} for which to perform the search
             * @param languageSpoken the language by which to filter search results
             * @param practice the {@link AWSDKPractice} in which to search. When practice is provided, the practice associated to the id will be used instead of the practice associated to the specialty
             * @param providerTypes the array of provider types to include in the search. When the list of provider types is provided, the list of provider types will be combined with the list of provider types associated to the specialty
             */
            findFirstAvailable(visitInfo: AWSDKVisit | AWSDKVisitContext, languageSpoken?: AWSDKLanguage, practice?: string, providerTypes?: AWSDKProviderType[]): Promise<AWSDKVisit | AWSDKVisitContext>;

            /**
             * Invites a guest via email to participate in the existing visit using multi-way video.
             * Multi-way video must be enabled on the system.
             * @param visit the visit to invite the guest to
             * @param guestEmail the email address where the invitation will be sent
             * @returns a promise that will resolve to an {@link AWSDKVideoInvitation} or rejected with an {@link error.AWSDKError}
             * @deprecated please use {@link service.VisitService#inviteGuestsToVisit} this will be removed in version 3.x
             */

            /**
            * Invites a list of guests via email to participate in the existing visit using multi-way video.
            * Multi-way video must be enabled on the system.
            * @param visit the visit to invite the guest to
            * @param guestEmails the email addresses where the invitation will be sent
            * @returns Returns a promise that will be resolved to an array of {@link AWSDKVideoInvitation}s or will
            *          be rejected with an {@link error.AWSDKError}.
            */
            inviteGuestsToVisit(visit: AWSDKVisit, guestEmails: string[]): Promise<AWSDKVideoInvitation[]>;

            inviteGuestToVisit(visit: AWSDKVisit, email: string): Promise<AWSDKVideoInvitation>;

            /**
             * This method cancels any ongoing first-available search being performed on behalf of the {@link AWSDKConsumer}.
             * @param consumer the consumer for whom to cancel the search
             */
            cancelFirstAvailableSearch(consumer: AWSDKConsumer): Promise<boolean>;

            /**
             * Validates the given {@link AWSDKVisitInvitation} by id. Invitations must be validated before the guest can
             * enter a video visit.
             * Multi-way video must be enabled on the system.
             * @param visitInviteId the id of the {@link AWSDKVisitInvitation} to validated
             * @param email the email address associated with the invitation
             * @param name the name of the guest joining the visit
             */
            validateGuestInvitation(visitInviteId: string, email: string, name: string): Promise<AWSDKVideoParticipant>;

            /**
             * Gets an up-to-date instance of the given {@link AWSDKVideoParticipant}
             * @param participant the {@link AWSDKVideoParticipant} to get updates for
             */
            getVideoParticipant(participant: AWSDKVideoParticipant): Promise<AWSDKVideoParticipant>;

            /**
             * Indicate that the given {@link AWSDKVideoParticipant} intends to connect and is ready to launch the telehealth video.
             * @param participant the {@link AWSDKVideoParticipant} to connect
             */
            updateVideoParticipantConnectionStatus(participant: AWSDKVideoParticipant): Promise<AWSDKVideoParticipant>;

            /**
             * Waits for the visit associated with this {@link AWSDKVideoParticipant} to start.
             * Must be preceded by {@link VisitService#updateVideoParticipantConnectionStatus|updateVideoParticipantConnectionStatus}.
             * @param participant the {@link AWSDKVideoParticipant} that is waiting
             */
            waitForVideoParticipantVisitToStart(participant: AWSDKVideoParticipant): Promise<AWSDKVideoParticipant>;

            /**
             * Waits for the visit associated with this {@link AWSDKVideoParticipant} to end.
             * @param participant the {@link AWSDKVideoParticipant} in the visit
             */
            waitForVideoParticipantVisitToEnd(participant: AWSDKVideoParticipant): Promise<AWSDKVideoParticipant>;

            /**
             *
             * @deprecated This function is no longer needed to support the Multi-way Video feature
             *             Waits for confirmation that the telehealth video was successfully started for the given {@link AWSDKVideoParticipant}
             *             Must be preceded by {@link VisitService#launchVideoParticipantTelehealthVideo|launchVideoParticipantTelehealthVideo}.
             * @param participant the {@link AWSDKVideoParticipant} that is waiting
             */
            waitForVideoParticipantTelehealthVideoToStart(participant: AWSDKVideoParticipant): Promise<AWSDKVideoParticipant>;

            /**
             * Launches the telehealth video for this {@link AWSDKVideoParticipant}.
             * Must be preceded by {@link VisitService#waitForVideoParticipantVisitToStart|waitForVideoParticipantVisitToStart}.
             * @param participant the particpant to launch the video for
             */
            launchVideoParticipantTelehealthVideo(participant: AWSDKVideoParticipant): Promise<boolean>;

            /**
             * Returns any notes made by the {@link AWSDKProvider} during the ongoing {@link AWSDKVisit}.
             * @param visit the visit to get notes for
             */
            getProviderNotes(visit: AWSDKVisit): Promise<AWSDKProviderNote[]>;

            /**
             * Accepts the offered paid extension for a visit.
             * @param visit the visit to extend
             * @param acceptExtension TRUE if the visit should be extended
             */
            acceptPaidVisitExtension(visit: AWSDKVisit, acceptExtension: boolean): Promise<boolean>;

            /**
             * Validate the {@link AWSDKConsumerOverrideDetails} object
             * Potential validation errors:
             * <p><table summary="validation" border="1">
             * <tr>
             * <th>Field</th>
             * <th>Validation Reason</th>
             * <th>Notes</th>
             * </tr>
             * <tr>
             * <td>firstName</td>
             * <td>field required</td>
             * <td>set to non-empty field</td>
             * </tr>
             * <tr>
             * <td>lastName</td>
             * <td>field required</td>
             * <td>set to non-empty field</td>
             * </tr>
             * <tr>
             * <td>firstName</td>
             * <td>invalid field format</td>
             * <td>At least 1 char long</td>
             * </tr>
             * <tr>
             * <td>middleNameOrInitial</td>
             * <td>invalid field format</td>
             * <td>If {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'INITIAL'. Can be blank or at most 1 character long. </td>
             * </tr>
             * <tr>
             * <td>middleNameOrInitial</td>
             * <td>invalid field format</td>
             * <td>If {@link AWSDKSystemConfiguration#consumerMiddleNameHandling|AWSDKSystemConfiguration.consumerMiddleNameHandling} is set to 'FULLNAME'. Can be blank or at most 100 characters long. </td>
             * </tr>
             * <tr>
             * <td>lastName</td>
             * <td>invalid field format</td>
             * <td>At least 2 chars long</td>
             * </tr>
             * <tr>
             * <td>dob</td>
             * <td>invalid field format</td>
             * <td>Must be valid date</td>
             * </tr>
             * <td>email</td>
             * <td>invalid field format</td>
             * <td>At least 5 chars long, and valid email pattern</td>
             * </tr>
             * <tr>
             * <td>phone</td>
             * <td>invalid field format</td>
             * <td>Must have format '[\\+]?[0-9.-]+' </td>
             * </tr>
             * <tr>
             * <td>address1</td>
             * <td>invalid field format</td>
             * <td>Must be at least 1 char long</td>
             * </tr>
             * <tr>
             * <td>address2</td>
             * <td>invalid field format</td>
             * <td>Can be null, but if not, must be at least 1 char long</td>
             * </tr>
             * <tr>
             * <td>city</td>
             * <td>invalid field format</td>
             * <td>At least 2 char long</td>
             * </tr>
             * <tr>
             * <td>zipCode</td>
             * <td>invalid field format</td>
             * <td>Format must be: nnnnn or nnnnn-nnnn</td>
             * </tr>
             * </table><p>
             * @param AWSDKConsumerOverrideDetails object to validate
             */
            validateConsumerOverrideDetails(AWSDKConsumerOverrideDetails: AWSDKConsumerOverrideDetails): AWSDKError[];

        }

        interface loggerConfig {
            /**
             * A string name that identifies the logger. This is the only required property.
             */
            name: string;
            /**
             * A string representing the logging level to use. The logger defaults to 'error'. The supported values are: 'fatal', 'error', 'warn', 'info', 'debug' and 'trace'.
             */
            level: string;
        }

        interface initialize_config {
            /**
             * The SDK key to use for identifying the client.
             */
            sdkApiKey: string;
            /**
             * The base Amwell telehealth platform URL to target.
             */
            baseUrl: string;
            /**
             * The locale used for all SDK requests.
             */
            locale: string;
            /**
             * The interval in milliseconds between requests to update the visit while the visit is started.
             */
            visitPollingInterval?: number;
            /**
             * The interval in milliseconds between requests to update the visitCost while the visitCost is calculating.
             */
            visitCostPollingInterval?: number;
            /**
             * The timeout in milliseconds to wait for the visitCost to finish calculating.
             */
            visitCostPollingTimeout?: number;
            /**
             * The interval in milliseconds between requests to update the eligibility while the insurance subscription is being updated.
             */
            eligibilityPollingInterval?: number;
            /**
             * The timeout in milliseconds to wait for the eligibility request while the insurance subscription is being updated.
             */
            eligibilityPollingTimeout?: number;
            /**
             * The interval in milliseconds between requests to determine the status of an ongoing first available search.
             */
            firstAvailablePollingInterval?: number;
            /**
             * The timeout in milliseconds to wait for the first available search to complete.
             */
            firstAvailablePollingTimeout?: number;
            /**
             * The timeout in milliseconds to wait for the telehealth video client to launch.
             */
            launchTelehealthVideoClientTimeout?: number;
            /**
             * Boolean that determines whether or not a parent's account information should propagate to the dependents. This is set to false by default @since 1.4.0.
             */
            ignorePropagation?: boolean;
        }

        interface createVideoContext_config {
            /**
             * The various nodes in the DOM where the video will be rendered.
             */
            attachPoints?: { [name: string]: HTMLElement };
            /**
             * Function to execute when the video visit has ended successfully.
             */
            successCallback?: (visit: AWSDKVisit) => void;
            /**
             * Function to execute when the video visit has encountered an unrecoverable error.
             */
            errorCallback?: (visit: AWSDKVisit, error: any) => void;

            /**
             * Function to execute when the visit is updated.
             */
            updatedCallback?: (visit: AWSDKVisit) => void;

            /**
             * The DOM node where the video console will be rendered @since 2.0.0.
             */
            videoConsoleContainer: HTMLElement;

            /**
             * The localized strings to be used during the visit.
             */
            messages: { [key: string]: string };

            /**
             * The locale of the consumer in the visit.
             */
            locale?: string;
        }

        /**
         * Contains details video details for a telehealth visit.
         */
        class AWSDKConferenceDetails extends AWSDKEntity {
            /**
             * Date the conference was created.
             */
            addDate: Date;
            /**
             * Access code to enter the conference.
             */
            accessCode: string;
            /**
             * Unique identifier for the conference.
             */
            uuid: string;
            /**
             * The Room id.
             */
            roomId: string;
            /**
             * Service URL.
             */
            serviceURL: string;
            /**
             * Whether or not this conferernce is currently active.
             */
            isActive: boolean;
        }

        /**
         * The external interface of the core WebRTC video console.
        */
        interface AWCoreSDKVideoConsole {
            /**
             * Attempts to teardown the video.
             *
             * @returns {undefined} does not return a value
             */
            stop(): void;

            /**
             * Attempts to refresh the video and reconnect to the visit.
             *
             * @since 1.0.15
             * @returns {undefined} does not return a value
             */
            refresh(): void;

            /**
             * Leave the ongoing visit.
             *
             * @since 1.0.0
             * @param {boolean=} userRequested (optional) Whether or not the user proactively requested the visit to end
             * @returns {Promise} A promise that resolves once the user has left the visit
             */
            leaveVisit(userRequested: boolean): void;

            /**
             * Toggle full screen mode
             *
             * @since 1.0.5
             * @returns {undefined} does not return a value
             */
            toggleFullScreen(): void;

            /**
             * Invokes console to disable callMe button.
             *
             * @param {boolean} enabled if the call me button should be disabled
             * @returns {undefined} does not return a value
             */
            toggleCallMeDisabled(enabled: boolean): void;

            /**
             * Returns TRUE if in WebRTC is supported.
             *
             * @since 1.0.12
             * @returns {boolean} TRUE if WebRTC is supported by the browser, false otherwise.
             */
            isWebRTCSupported: boolean;
        }

        /**
         * Enum for AWSDKConnectionType.
         * @readonly
         * @enum {string}
         * @since 2.0.0
         */
        enum AWSDKConnectionType {
          NONE = 'NONE',
          MOBILE = 'MOBILE',
          MULTIPLE = 'MULTIPLE',
          PHONE = 'PHONE',
          WEB = 'WEB',
          WEB_AND_PHONE = 'WEB_AND_PHONE',
          WEB_SDK = 'WEB_SDK',
          WEB_SDK_AND_PHONE = 'WEB_SDK_AND_PHONE',
          KIOSK = 'KIOSK',
          TELEMED = 'TELEMED',
        }

    }

    export default awsdk;

}
