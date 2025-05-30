# Clone nginx:alpine image
#
# Note: This image implicitly exposes port 80:
#    EXPOSE 80
#
# And implicitly runs nginx:
#    CMD ["nginx", "-g", "daemon off;"]
FROM nginx:alpine

# Copy website to nginx webroot
COPY www /usr/share/nginx/html

# Make it visible to nginx inside docker
RUN chown -R root:nginx /usr/share/nginx/html