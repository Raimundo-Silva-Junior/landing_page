from rest_framework import serializers
from django.contrib.auth.models import User

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True},
                        'first_name': {'write_only': True},
                        'last_name': {'write_only': True}
                        }

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'], 
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'], 
            email=validated_data['email'], 
            password=validated_data['password'])

        return user