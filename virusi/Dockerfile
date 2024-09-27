# Don't change this [ /VirusiMbaya/ ] name!
# Change from below link, else bot wil not work!


FROM node:20

RUN git clone https://github.com/Vurusian/Virusi-Mbaya-Md /root/Virusi

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Virusi/node_modules

# Install dependencies
WORKDIR /root/Virusi
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
